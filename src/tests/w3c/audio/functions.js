__audioFunctionTests = [
	{
		id:1200,
		name:"dom-Audio",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-audio"],
		test:function(t){
			var audioElement = new Audio();
			t.assertTrue(typeof audioElement === "object" && audioElement.src == "" && audioElement.preload == "auto");
		}
	},
	{
		id:1300,
		name:"dom-Audio, factory createElement()",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-audio"],
		test:function(t){
			var audioElement = document.createElement('audio');
			t.assertTrue(typeof audioElement === "object" && audioElement.src == "");
		}
	},
	{
		id:1400,
		name:"dom-Audio-s",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-audio-s"],
		test:function(t){
			var audioElement = new Audio(__loopToTest);
			t.assertTrue(typeof audioElement === "object" && new RegExp(__loopToTest + "$").test(audioElement.src) && audioElement.preload == "auto");
		}
	},
	{
		id:1600,
		name:"the-source-element",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#htmlsourceelement"],
		test:function(t){
			dohx.showInfo('<audio id="the-source-element-audio"><source id="the-source-element"></audio>');
			var source = document.getElementById("the-source-element");
			t.assertTrue(typeof source === "object");
		}
	},
	{
		id:1700,
		name:"attr-source-src",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-source-src"],
		test:function(t){
			dohx.showInfo('<audio id="attr-source-src-audio"><source id="attr-source-src" src="'+__loopToTest+'"></audio>');
			var source = document.getElementById("attr-source-src");
			t.assertTrue(new RegExp(__loopToTest + "$").test(source.src));
		}
	},
	{
		id:1800,
		name:"attr-source-type",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-source-type"],
		test:function(t){
			dohx.showInfo('<audio id="attr-source-src-audio"><source id="attr-source-src" type="'+__mediaMimeType+'"></audio>');
			var source = document.getElementById("attr-source-src");
			t.assertEqual(__mediaMimeType, source.type);
		}
	},
	{
		id:1900,
		name:"attr-source-media",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-source-media"],
		test:function(t){
			dohx.showInfo('<audio id="attr-source-media-audio"><source id="attr-source-media" media="whatever"></audio>');
			var source = document.getElementById("attr-source-media");	
			t.assertEqual("whatever", source.media);
		}
	},
	{
		id:1901,
		name:"attr-source-media-omit",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-source-media"],
		test:function(t){
			dohx.showInfo('<audio id="attr-source-media-audio"><source id="attr-source-media"></audio>');
			var source = document.getElementById("attr-source-media");	
			t.assertEqual("all", source.media);
		}
	},
	{
		id:2000,
		name:"dom-source-src",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-source-src"],
		test:function(t){
			var source = document.createElement("source");
			source.src = __loopToTest;
			t.assertTrue(new RegExp(__loopToTest + "$").test(source.src));
		}
	},
	{
		id:2100,
		name:"dom-source-type",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-source-type"],
		test:function(t){
			var source = document.createElement("source");
			source.type = __mediaMimeType;
			t.assertEqual(__mediaMimeType, source.type);
		}
	},
	{
		id:2200,
		name:"dom-source-media",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-source-media"],
		test:function(t){
			var source = document.createElement("source");
			source.media = 'whatever';
			t.assertEqual('whatever', source.media)
		}
	},
	{
		id:2201,
		name:"dom-source-media-omit",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-source-media"],
		test:function(t){
			var source = document.createElement("source");
			t.assertEqual('all', source.media)
		}
	},
	/*{
		id:4900,
		name:"media element",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#media-element"],
		test:function(t){
			//	TODO go on here
		}
	},
	{
		id:5800,
		name:"dom-MediaError-MEDIA_ERR_ABORTED",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-mediaerror-media_err_aborted"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:5900,
		name:"dom-MediaError-MEDIA_ERR_NETWORK",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-mediaerror-media_err_network"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:6000,
		name:"dom-MediaError-MEDIA_ERR_DECODE",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-mediaerror-media_err_decode"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:6100,
		name:"dom-MediaError-MEDIA_ERR_SRC_NOT_SUPPORTED",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-mediaerror-media_err_src_not_supported"],
		test:function(t){
			//	add the test here
		}
	},*/
	{
		id:6200,
		name:"attr-media-src-empty",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-src"],
		test:function(t){
			dohx.showInfo('<audio id="attr-media-src"></audio>');
			var node = document.getElementById("attr-media-src");
			t.assertEqual("", node.src);
		}
	},
	{
		id:6200,
		name:"attr-media-src-set",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-src"],
		test:function(t){
			dohx.showInfo('<audio id="attr-media-src" src="'+__loopToTest+'"></audio>');
			var node = document.getElementById("attr-media-src");
			t.assertTrue(new RegExp(__loopToTest + "$").test(node.src));
		}
	},
	{
		id:6300,
		name:"dom-media-src-empty",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-src"],
		test:function(t){
			var node = new Audio();
			t.assertEqual("", node.src);
		}
	},
	{
		id:6300,
		name:"dom-media-src-set",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-src"],
		test:function(t){
			var node = new Audio();
			node.src = __loopToTest;
			t.assertTrue(new RegExp(__loopToTest + "$").test(node.src));
		}
	},
	/*{
		id:6400,
		name:"dom-media-currentSrc-set-dom",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-currentsrc"],
		test:function(t){
		    var node = new Audio();
			node.src = __loopToTest;
			t.assertTrue(new RegExp(__loopToTest + "$").test(node.currentSrc));
		}
	},*/
	{
		id:6600,
		name:"dom-navigator-canPlayType-application/octet-stream",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype"],
		test:function(t){
			var node = new Audio();
			t.assertEqual("", node.canPlayType("application/octet-stream"));
		}
	},
	{
		id:6800,
		name:"dom-media-NETWORK_EMPTY",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-network_empty"],
		test:function(t){
			var node = document.createElement("audio")
			t.assertEqual(node.NETWORK_EMPTY, node.networkState);
		}
	},
	/*{
		id:6900,
		name:"dom-media-NETWORK_IDLE",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-network_idle"],
		test:function(t){
			__audioNode.load();
			__audioNode.addEventListener("loadeddata", function(){
				t.assertEqual(audioNode.NETWORK_IDLE, audioNode.networkState);
			}, false);
		}
	},*/
	/*{
		id:7000,
		name:"dom-media-NETWORK_LOADING",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-network_loading"],
		test:function(t){
			//	add the test here
		}
	},*/
	{
		id:7100,
		name:"dom-media-NETWORK_NO_SOURCE",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-network_no_source"],
		test:function(t){
			var node = document.createElement("audio");
			node.src = "non-existent-audio-file" + (+new Date());
			t.assertEqual(node.NETWORK_NO_SOURCE, node.networkState);
		}
	},
	/*{
		id:7200,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#autoplaying-flag"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7300,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#delaying-the-load-event-flag"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7400,
		name:"dom-media-load",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-load"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7500,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#media-element-load-algorithm"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7600,
		name:"concept-media-load-algorithm",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#concept-media-load-algorithm"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7700,
		name:"concept-media-load-resource",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#concept-media-load-resource"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7800,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#stall-timeout"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:7900,
		name:"attr-media-preload",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8000,
		name:"attr-media-preload-none",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload-none"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8100,
		name:"attr-media-preload-none-state",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload-none-state"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8200,
		name:"attr-media-preload-metadata",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload-metadata"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8300,
		name:"attr-media-preload-metadata-state",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload-metadata-state"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8400,
		name:"attr-media-preload-auto",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload-auto"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8500,
		name:"attr-media-preload-auto-state",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-preload-auto-state"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8600,
		name:"dom-media-preload",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-preload"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8700,
		name:"dom-media-buffered",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-buffered"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8800,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#media-timeline"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:8900,
		name:"establish the media  timeline",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#defineTimeline"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9000,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#current-playback-position"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9100,
		name:"dom-media-currentTime",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-currenttime"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9200,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#initial-playback-position"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9300,
		name:"dom-media-initialTime",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-initialtime"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9400,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#earliest-possible-position"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9500,
		name:"dom-media-duration",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-duration"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9600,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#timeline-offset"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9700,
		name:"dom-media-startOffsetTime",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-startoffsettime"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9800,
		name:"attr-media-loop",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-loop"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:9900,
		name:"dom-media-loop",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-loop"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:10000,
		name:"dom-media-HAVE_NOTHING",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-have_nothing"],
		test:function(t){
			var node = document.createElement("audio")
			t.assertEqual(node.HAVE_NOTHING, node.readyState);
		}
	},*/
	{
		id:10100,
		name:"dom-media-HAVE_METADATA",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-have_metadata"],
		test:function(t){
			__audioNode.load();
			__audioNode._event = ["loadedmetadata", function(){
				t.assertTrue(__audioNode.readyState >= __audioNode.HAVE_METADATA);
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
		},
		tearDown:function(){
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
		}
	},
	{
		id:10200,
		name:"dom-media-HAVE_CURRENT_DATA",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-have_current_data"],
		test:function(t){
			__audioNode.load();
			__audioNode._event = ["loadeddata", function(){
				t.assertTrue(__audioNode.readyState >= __audioNode.HAVE_CURRENT_DATA);
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
		},
		tearDown:function(){
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
		}
	},
	{
		id:10300,
		name:"dom-media-HAVE_FUTURE_DATA",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-have_future_data"],
		test:function(t){
			__audioNode.load(); // There is no reset() so reload the file for resetting.
			__audioNode.play();
			__audioNode._event = ["playing", function(){
				t.assertTrue(__audioNode.readyState >= __audioNode.HAVE_FUTURE_DATA);
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
		},
		tearDown:function(){
			__audioNode.pause();
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
		}
	},
	{
		id:10400,
		name:"dom-media-HAVE_ENOUGH_DATA",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-have_enough_data"],
		test:function(t){
			__audioNode.load(); // There is no reset() so reload the file for resetting.
			__audioNode.play();
			__audioNode._event = ["canplaythrough", function(){
				t.assertTrue(__audioNode.readyState >= __audioNode.HAVE_ENOUGH_DATA);
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
		},
		tearDown:function(){
			__audioNode.pause();
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
		}
	},
	/*{
		id:10500,
		name:"dom-media-readyState",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-readystate"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:10600,
		name:"attr-media-autoplay",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-autoplay"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:10700,
		name:"dom-media-autoplay",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-autoplay"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:10800,
		name:"dom-media-paused",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-paused"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:10900,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#potentially-playing"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11000,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#ended-playback"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11100,
		name:"dom-media-ended",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-ended"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11200,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#stopped-due-to-errors"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11300,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#paused-for-user-interaction"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11400,
		name:"dom-media-defaultPlaybackRate",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-defaultplaybackrate"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11500,
		name:"dom-media-playbackRate",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-playbackrate"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11600,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#direction-of-playback"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11700,
		name:"dom-media-played",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-played"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11800,
		name:"dom-media-play",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-play"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:11900,
		name:"dom-media-pause",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-pause"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:12000,
		name:"dom-media-seeking",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-seeking"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:12100,
		name:"dom-media-seek",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-seek"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:12200,
		name:"dom-media-seekable",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-seekable"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20200,
		name:"attr-media-controls",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-controls"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20300,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#expose-a-user-interface-to-the-user"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20400,
		name:"dom-media-controls",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-controls"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20500,
		name:"dom-media-volume",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-volume"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20600,
		name:"dom-media-muted",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-muted"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20700,
		name:"attr-media-audio",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-audio"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20800,
		name:"attr-media-audio-keyword-muted",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-audio-keyword-muted"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:20900,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#timeranges"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21000,
		name:"dom-TimeRanges-length",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-timeranges-length"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21100,
		name:"dom-TimeRanges-start",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-timeranges-start"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21200,
		name:"dom-TimeRanges-end",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-timeranges-end"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21300,
		name:"",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#normalized-timeranges-object"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21400,
		name:"event-media-loadstart",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-loadstart"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21500,
		name:"event-media-progress",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-progress"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21600,
		name:"event-media-suspend",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-suspend"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21700,
		name:"event-media-abort",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-abort"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21800,
		name:"event-media-error",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-error"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:21900,
		name:"event-media-emptied",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-emptied"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22000,
		name:"event-media-stalled",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-stalled"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22100,
		name:"event-media-play",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-play"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22200,
		name:"event-media-pause",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-pause"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22300,
		name:"event-media-loadedmetadata",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-loadedmetadata"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22400,
		name:"event-media-loadeddata",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-loadeddata"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22500,
		name:"event-media-waiting",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-waiting"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22600,
		name:"event-media-playing",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-playing"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22700,
		name:"event-media-canplay",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-canplay"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22800,
		name:"event-media-canplaythrough",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-canplaythrough"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:22900,
		name:"event-media-seeking",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-seeking"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:23000,
		name:"event-media-seeked",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-seeked"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:23100,
		name:"event-media-timeupdate",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-timeupdate"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:23200,
		name:"event-media-ended",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-ended"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:23300,
		name:"event-media-ratechange",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-ratechange"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:23400,
		name:"event-media-durationchange",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-durationchange"],
		test:function(t){
			//	add the test here
		}
	},
	{
		id:23500,
		name:"event-media-volumechange",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-volumechange"],
		test:function(t){
			//	add the test here
		}
	}*/
];


/*
//	Audio Function Tests to include
__audioFunctionTests = [
	{
		id:1,
		name:"Verify Preconditions",
		instructions:[
			"Make sure all the preconditions listed are met. They will be required by upcoming tests.",
			"Be sure the content of the testsuite's zip-file's  folder 'test-audio' is available in the relative path 'test-audio'.",
			"Ensure the volume is set to high, so you can hear the audio playing!",
			"Click 'GO' to start testing."
		],
		test:function(t){
			t.success("Preconditions met, user confirmed.");
		}
	},
	{
		id:100,
		name:"play(), dom media play",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-play"],
		expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
		test:function(t){
			__audioNode.src = __loopToTest;
			__audioNode.play();
		},
		tearDown:function(){
			__audioNode.pause();
		}
	},
	{
		id:200,
		name:"pause(), dom-media-pause",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-pause"],
		expectedResult:"Did you hear no sound or just a very short sound?",
		test:function(t){
			__audioNode.src = __loopToTest;
			__audioNode.play();
			__audioNode.pause();
		},
		tearDown:function(){
			__audioNode.pause();
		}
	},
	{
		id:300,
		name:"play event, event-media-play",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-play"],
		test:function(t){
			__audioNode._event = ["play", function(){
				t.success("OK. play event got fired.");
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.play();
		},
		tearDown:function(){
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.pause();
		}
	},
	{
		id:400,
		name:"pause event, event-media-pause",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-pause"],
		test:function(t){
			__audioNode._event = ["pause", function(){
				t.success("OK. pause event got fired.");
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.play();
			__audioNode.pause();					
		},
		tearDown:function(){
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.pause();
		}
	},
	{
		id:500,
		name:"source element",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#the-source-element"],
		expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
		test:function(t){
			var source = '<source src="'+__loopToTest+'" type="audio/wav">';
			dohx.showInfo('<audio id="audio500">'+source+'</audio>');
			__audioNodeTest = embed.query("#audio500")[0];
			__audioNodeTest.play();
		},
		tearDown:function(){
			__audioNodeTest.pause();
		}
	},
	//
	//	test the controls
	//
	{
		id:600,
		name:"controls attribute, attr-media-controls",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-controls"],
		expectedResult:"Can you see the browsers audio controls (Play, timeline and volume)?",
		test:function(t){
			dohx.showInfo('<audio id="audio600"></audio>');
			__audioNodeTest = embed.query("#audio600")[0];
			__audioNodeTest.controls = true;
		}
	},
	{
		id:700,
		name:"controls play",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-controls"],
		instructions:[
			"Click the play button and check weather a sound is played."
		],
		expectedResult:"Did the sound play after you clicked play?",
		test:function(t){
			dohx.showInfo('<audio id="audio700"></audio>');
			__audioNodeTest = embed.query("#audio700")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
		}
	},
	{
		id:800,
		name:"controls pause",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-controls"],
		instructions:[
			"While the sound is playing click the pause button."
		],
		expectedResult:"Did the sound stop after you clicked pause?",
		test:function(t){
			dohx.showInfo('<audio id="audio800"></audio>');
			__audioNodeTest = embed.query("#audio800")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
			__audioNodeTest.play();
		}
	},
	{
		id:900,
		name:"controls volume",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-controls"],
		instructions:[
			"While the sound is playing change the volume using the volume control."
		],
		expectedResult:"Did the volume control act like expected?",
		test:function(t){
			dohx.showInfo('<audio id="audio900"></audio>');
			__audioNodeTest = embed.query("#audio900")[0];
			__audioNodeTest.src = __songToTest;
			__audioNodeTest.controls = true;
			__audioNodeTest.play();
		}
	},
	{
		id:1000,
		name:"controls timeline",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-controls"],
		instructions:[
			"While the sound is playing use the timeline control to move forward inside the song."
		],
		expectedResult:"Did the timeline control act like expected?",
		test:function(t){
			dohx.showInfo('<audio id="audio1000"></audio>');
			__audioNodeTest = embed.query("#audio1000")[0];
			__audioNodeTest.src = __songToTest;
			__audioNodeTest.controls = true;
			__audioNodeTest.play();
		}
	},
	//
	//	test audio properties
	//
	{
		id:1100,
		name:"loop attribute, attr-media-loop",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-loop"],
		instructions:[
			"Wait until the whole sound was played and check if it starts again."
		],
		expectedResult:"Did the sound start again after the first loop?",
		test:function(t){
			dohx.showInfo('<audio id="audio1100" loop></audio>');
			__audioNodeTest = embed.query("#audio1100")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
			__audioNodeTest.play();
		}
	},
	{
		id:1200,
		name:"autoplay attribute, attr-media-autoplay",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#attr-media-autoplay"],
		instructions:[
			"After clicking the 'GO' button the sound should automatically start."
		],
		expectedResult:"Did the sound start automatically?",
		test:function(t){
			dohx.showInfo('<audio id="audio1200" autoplay></audio>');
			__audioNodeTest = embed.query("#audio1200")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
		}
	},
	{
		id:1300,
		name:"volume, dom-media-volume",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-volume"],
		expectedResult:"Did you hear a sound with low volume?",
		test:function(t){
			dohx.showInfo('<audio id="audio1300"></audio>');
			__audioNodeTest = embed.query("#audio1300")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
			__audioNodeTest.volume = 0.2;
			__audioNodeTest.play();
		}
	},
	{
		id:1400,
		name:"volumechange event, event-media-volumechange",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-volumechange"],
		test:function(t){
			__audioNode._event = ["volumechange", function(){
				t.success("OK. volumechange event got fired.");
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.play();
			__audioNode.volume = 0.2;
			__audioNode.pause();					
		},
		tearDown:function(){
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.volume = 1;
			__audioNode.pause();
		}
	},
	{
		id:1500,
		name:"volume error, throw INDEX_SIZE_ERR",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-volume"],
		test:function(t){
			try {
				__audioNode.volume = 2;		
			}	
			catch(e) {
				if(e.code === DOMException.INDEX_SIZE_ERR) {
					t.success("OK. INDEX_SIZE_ERR thrown");
				}
			}
		},
		tearDown:function(){
			__audioNode.volume = 1;
		}
	},
	{
		id:1600,
		name:"muted, dom-media-muted",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-muted"],
		expectedResult:"Did the control show that the sound was played but there was no sound?",
		test:function(t){
			dohx.showInfo('<audio id="audio1600"></audio>');
			__audioNodeTest = embed.query("#audio1600")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
			__audioNodeTest.play();
			__audioNodeTest.muted = true;
		}
	},
	{
		id:1700,
		name:"paused, dom-media-paused",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-paused"],
		test:function(t){
			__audioNode.play();
			__audioNode.pause();
			if (!!__audioNode.paused === true) {
				t.success('OK. Played property is true.');
			}
			else {
				t.failure('Played property is' + __audioNode.paused);
			}
		}
	},
	{
		id:1800,
		name:" defaultPlaybackRate, dom-media-defaultplaybackrate",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-defaultplaybackrate"],
		test:function(t){
			__audioNode.defaultPlaybackRate = 1;
			if (__audioNode.defaultPlaybackRate === 1) {
				t.success('OK. defaultPlaybackRate was set to 1');
			}
			else {
				t.failure('defaultPlaybackRate is ' + __audioNode.defaultPlaybackRate);
			}
		}
	},
	{
		id:1900,
		name:" playbackRate, dom-media-playbackrate",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-playbackrate"],
		expectedResult:"Did the sound play slower than normal?",
		test:function(t){
			__audioNode.play();
			__audioNode.playbackRate  = 0.5;
		},
		tearDown:function(){
			__audioNode.playbackRate = 1;
			__audioNode.pause();
		}
	},
	{
		id:2000,
		name:"ratechange event, event-media-ratechange",
		definedInSpecs:["http://www.w3.org/TR/2011/WD-html5-20110113/video.html#event-media-ratechange"],
		test:function(t){
			__audioNode._event = ["pause", function(){
				t.success("OK. ratechange event got fired.");
			}, false];
			__audioNode.addEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.play();
			__audioNode.playbackRate = 0.5;
			__audioNode.pause();					
		},
		tearDown:function(){
			__audioNode.removeEventListener.apply(__audioNode, __audioNode._event);
			__audioNode.playbackRate = 1;
			__audioNode.pause();
		}
	}
];
*/