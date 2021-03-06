/*
	Copyright 2010-2011 Vodafone Group Services GmbH
	
	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at
	
		http://www.apache.org/licenses/LICENSE-2.0
	
	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
(function(){
	var wd = util.isObject("Widget.Device") ? Widget.Device : {};
	var wdd = util.isObject("DeviceStateInfo", wd) ? wd.DeviceStateInfo : {};
	
	// Spec 1.2.2 says
	//	"Some or all of the properties may be undefined if the back-end
	//	services should be unavailable (e.g., due to network unavailability)
	//	or if the Widget does not have sufficient security permissions
	//	to obtain this information."
	// This means all properties must be given, but can be undefined.
	var positionProperties = ["accuracy", "altitude", "altitudeAccuracy", "cellID", "latitude", "longitude", "timeStamp"];
	var locationTimeouts = config.geolocation.timeouts;
	
	function showPosInfo(posInfo, startTime){
		var ret = [];
		for (var i=0, l=positionProperties.length; i<l; i++){
			var p = positionProperties[i];
			ret.push(p+": "+embed.toJson(posInfo[p]));
		}
		return ret.join(", ")  + (startTime?"<br/>(took "+ (+new Date() - startTime)/1000 +"seconds)":"");
	}
	
	var _fastestMethod = config.geolocation.supportsCellId ? "cellid" : (config.geolocation.supportsAgps ? "agps" : "gps");
	
	dohx.add({name:"PositionInfo",
		mqcExecutionOrderBaseOffset:210000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		requiredObjects:["Widget.Device.DeviceStateInfo"],
		tests:[
			//
			// Preconditions
			//
			{
				id:1,
				name:"Verify Preconditions",
				instructions:[
					"Make sure you have good GPS reception (best done outside).",
					"Click 'GO' to start testing."
				],
				test:function(t){
					t.success("Preconditions met, user confirmed. (fastest method=" + _fastestMethod + ")");
				}
			},
			{
				id:100,
				name:"Widget.Device.DeviceStateInfo.onPositionRetrieved - Verify that callback fires.",
				addIf:config.geolocation.supportsCellId || config.geolocation.supportsGps || config.geolocation.supportsAgps,
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				instructions:"Click 'GO', to retreive your location.",
//fails now, didnt in v1.2
				timeout:locationTimeouts.gps,
				test:function(t){
					var startTime = + new Date();
					wdd.onPositionRetrieved = function(posInfo, method){
						t.success(showPosInfo(posInfo, startTime));
					};
					wdd.requestPositionInfo(_fastestMethod);
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
			},
			{
				id:200,
				name:"requestPositionInfo('cellid') - Verify return value is of type 'PositionInfo'.",
				addIf:config.geolocation.supportsCellId,
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				instructions:"Click 'GO' to get position!",
				timeout:locationTimeouts.cellId,
				test:function(t){
					var startTime = + new Date();
					wdd.onPositionRetrieved = function(posInfo, method){
						t.assertTrue(posInfo instanceof wd.PositionInfo);
						t.result = showPosInfo(posInfo, startTime);
					};
					wdd.requestPositionInfo("cellid");
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
			},
			{
				id:300,
				name:"requestPositionInfo('gps') - Verify return value is of type 'PositionInfo'.",
				addIf:config.geolocation.supportsGps,
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				instructions:"Click 'GO' to get position!",
				timeout:locationTimeouts.gps,
				test:function(t){
					var startTime = + new Date();
					wdd.onPositionRetrieved = function(posInfo, method){
						t.assertTrue(posInfo instanceof wd.PositionInfo);
						t.result = showPosInfo(posInfo, startTime);
					};
					wdd.requestPositionInfo("gps");
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
			},
			{
				id:350,
				name:"requestPositionInfo('gps') - Try getting position three times in a row.",
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				instructions:"Click 'GO' to start test!",
				timeout:locationTimeouts.gps * 4, // at least four times the GPS timeout
				test:function(t){
					var getPos = function(callback){
						wdd.onPositionRetrieved = function(posInfo, method){
							callback(posInfo);
						};
						wdd.requestPositionInfo("gps");
					};
					var positions = [];
					var counter = 0;
					var getPos2 = function(posInfo){
						positions[counter++] = posInfo;
						if (counter<3){
							dohx.showInfo(counter + "x position retreived - " + showPosInfo(posInfo, startTime));
							startTime = + new Date();
							getPos(getPos2);
						} else {
							t.assertTrue(true);
						}
					};
					var startTime = +new Date();
					dohx.showInfo("Trying to retreive position ...");
					getPos(getPos2);
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
			},
			{
				id:400,
				name:"requestPositionInfo('agps') - Verify return value is of type 'PositionInfo'.",
				addIf:config.geolocation.supportsAgps,
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				instructions:"Click 'GO' to get position!",
				timeout:locationTimeouts.agps,
				test:function(t){
					wdd.onPositionRetrieved = function(posInfo, method){
						t.assertTrue(posInfo instanceof wd.PositionInfo);
						t.result = showPosInfo(posInfo);
					};
					wdd.requestPositionInfo("agps");
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
			},
			{
				id:500,
				name:"requestPositionInfo - Let user verify position.",
				addIf:config.geolocation.supportsCellId || config.geolocation.supportsGps || config.geolocation.supportsAgps,
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				instructions:"Click 'GO', to retreive your location.",
				expectedResult:"Is the above your current position?",
				timeout:locationTimeouts.gps,
				test:function(t){
					dohx.showInfo('Retreiving coordinates...');
					// Find most accurate available method to get position.
					var method = config.geolocation.supportsGps ? "gps" : (config.geolocation.supportsAgps ? "agps" : "cellid");
					// Get the position.
					wdd.onPositionRetrieved = function(posInfo){
						var latLng = posInfo.latitude + "," + posInfo.longitude;
						var url = "http://maps.google.com/staticmap?center="+latLng+"&zoom=16&size=500x500&maptype=mobile\&markers="+latLng;
						dohx.showInfo('lat, lng:'+ latLng +'<br /><img src="'+url+'" />');
						//t.result = showPosInfo(posInfo); we have an expectedResult this wont show anything
					};
					wdd.requestPositionInfo(method);
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
			},
			{
				id:600,
				name:"requestPositionInfo - Verify properties of returned 'PositionInfo' object.",
				addIf:config.geolocation.supportsCellId || config.geolocation.supportsGps || config.geolocation.supportsAgps,
				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
				timeout:locationTimeouts.gps,
				test:function(t){
					// Get the position.
					wdd.onPositionRetrieved = function(posInfo){
						var check = util.checkProperties(posInfo, positionProperties);
						t.assertTrue(check.missing.length==0, "Missing properties: " + check.missing.join(", ") + "! (Return value was: "+embed.toJson(posInfo)+")");
						t.result = showPosInfo(posInfo);
					};
					wdd.requestPositionInfo(_fastestMethod);
				},
				tearDown:function(){
					wdd.onPositionRetrieved = null;
				}
//			},{
//				id:700,
//				name:"requestPositionInfo - Verify types of properties of returned 'PositionInfo' object.",
//				addIf:config.geolocation.supportsCellId || config.geolocation.supportsGps || config.geolocation.supportsAgps,
//				requiredObjects:["Widget.Device.DeviceStateInfo.requestPositionInfo"],
//				//timeout:30 * 1000, // Wait max. 10sec.
//				test:function(t){
//throw new Error("TODO to implement");
//				}
			}
//*/
		]
	});
})();
