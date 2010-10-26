(function(){
	// Check the config stuff we need for the tests.
	if (!util.isConfigured(["validAddressBookItemId"])){
		return;
	}
	
	var w = util.isObject("Widget") ? Widget : {};
	var pim = util.isObject("Widget.PIM") ? Widget.PIM : {};
	var addressProperties = ["address", "addressBookItemId", "company", "eMail", "fullName", "homePhone", "mobilePhone", "title", "workPhone"];
	
	dohx.add({name:"AddressBookItem",
		mqcExecutionOrderBaseOffset:10000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		requiredObjects:["Widget.PIM.AddressBookItem"],
		tests:[
			//
			//	get/setAttributeValue
			//
			{
				id:100,
				name:"AddressBookItem get/setAttributeValue() - Verify it's callable and sets 'fullName' property correct.",
				requiredObjects:["Widget.PIM.AddressBookItem"],
				mustSupportApis:["Widget.PIM.AddressBookItem.getAttributeValue", "Widget.PIM.AddressBookItem.setAttributeValue"],
				test:function(t){
					var item = new pim.AddressBookItem();
					item.setAttributeValue("fullName", "a*");
					t.assertEqual("a*", item.getAttributeValue("fullName"));
				}
			},
			{
				id:200,
				name:"getAttributeValue() - Verify returns undefined for non-assigned attribute.",
				requiredObjects:["Widget.PIM.AddressBookItem"],
				instructions:[
					"Make sure that the 'title' for addressbook item with ID '" + config.validAddressBookItemId + "'.",
					"Click 'GO'."
				],
				mustSupportApis:["Widget.PIM.AddressBookItem.getAttributeValue"],
				test:function(t){
					var item = pim.getAddressBookItem(config.validAddressBookItemId);
					var ret = item.getAttributeValue("title");
					// Spec 1.2.1 says:
					// This should be undefined if the 
					// addressBookItem has no value assigned for the attribute. Note, however, that 
					// under some implementations a null or empty string ("") value may also be 
					// returned for unassigned attribute values. 
					t.assertTrue(typeof ret=="undefined" || ret===null || ret==="");
				}
			},
			{
				id:250,
				name:"getAttributeValue() - Throw INVALID_PARAMETER for not existing attribute.",
				requiredObjects:["Widget.PIM.AddressBookItem"],
				mustSupportApis:["Widget.PIM.AddressBookItem.getAttributeValue"],
				test:function(t){
					var item = pim.getAddressBookItem(config.validAddressBookItemId);
					try{
						var ret = item.getAttributeValue("foobars_brother");
					}catch(e){
						// Spec 1.2.1 says:
						// This should be undefined if the 
						// addressBookItem has no value assigned for the attribute. Note, however, that 
						// under some implementations a null or empty string ("") value may also be 
						// returned for unassigned attribute values. 
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
					}
				}
			},
			{
				id:300,
				name:"getAvailableAttributes() - Verify it's an array.",
				requiredObjects:["Widget.PIM.AddressBookItem"],
				mustSupportApis:["Widget.PIM.AddressBookItem.getAvailableAttributes"],
				test:function(t){
					var item = pim.getAddressBookItem(config.validAddressBookItemId);
					t.assertTrue(doh.util.isArray(item.getAvailableAttributes()));
				}
			},
			{
				id:400,
				name:"getAvailableAttributes() - Verify content.",
				requiredObjects:["Widget.PIM.AddressBookItem"],
				mustSupportApis:["Widget.PIM.AddressBookItem.getAvailableAttributes"],
				// The spec says (pg 145):
				// 		"A complete list of possible attributes for 
				//		the contact is returned, regardless of whether such attributes have values assigned for  
				//		the available contact."
				instructions:[
					"Find out all possible attributes a contact can have.",
					"Click 'GO'."
				],
				expectedResult:"Are those all possible attributes?",
				test:function(t){
					var item = pim.getAddressBookItem(config.validAddressBookItemId);
					dohx.showInfo("Reported attributes are: ", item.getAvailableAttributes().join(", "));
				}
			},
			{
				id:500,
				name:"getAddressGroupNames() - Verify content.",
				requiredObjects:["Widget.PIM.getAddressBookItem"],
				mustSupportApis:["Widget.PIM.AddressBookItem.getAddressGroupNames"],
				instructions:[
					"Make sure an address book item with the ID " + util.toJson(config.validAddressBookItemId) + " exists.",
					"Add this contact at least into one group.",
					"Click 'GO'."
				],
				expectedResult:"Are those groups correct?",
				test:function(t){
					var item = pim.getAddressBookItem(config.validAddressBookItemId);
					if (typeof item.getAddressGroupNames!="function"){
						// We have "expectedResult" up there, this prevents from getting the proper t object in here :(, so we throw an error.
						throw new Error("item.getAddressGroupNames() is not implemented.");
					}
					dohx.showInfo("Reported group names for this contact are: ", item.getAddressGroupNames().join(", "));
				}
			}
//*/
		]
	});

})();
