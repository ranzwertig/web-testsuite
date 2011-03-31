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
