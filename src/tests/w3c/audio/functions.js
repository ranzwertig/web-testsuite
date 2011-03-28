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
		name:"play()",
		expectedResult:"A sound with a duration with about 6 seconds is playing.",
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
		name:"pause()",
		expectedResult:"There was no or just a very short sound played.",
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
		name:"event type play",
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
		name:"event type pause",
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
		expectedResult:"A sound with a duration with about 6 seconds is playing.",
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
		name:"show controls",
		expectedResult:"There are audio controls shown (Play, timeline and volume).",
		test:function(t){
			dohx.showInfo('<audio id="audio600"></audio>');
			__audioNodeTest = embed.query("#audio600")[0];
			__audioNodeTest.controls = true;
		}
	},
	{
		id:700,
		name:"control play",
		instructions:[
			"Click the play button and check weather a sound is played."
		],
		expectedResult:"There are audio controls and after clicking the play button a sound was played.",
		test:function(t){
			dohx.showInfo('<audio id="audio700"></audio>');
			__audioNodeTest = embed.query("#audio700")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
		}
	},
	{
		id:800,
		name:"control pause",
		instructions:[
			"While the sound is playing click the pause button."
		],
		expectedResult:"After clicking the pause button the sound stopped.",
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
		name:"control volume",
		instructions:[
			"While the sound is playing change the volume using the volume control."
		],
		expectedResult:"The volume control acts like expected.",
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
		name:"control timeline",
		instructions:[
			"While the sound is playing use the timeline control to move forward inside the song."
		],
		expectedResult:"The timeline control acts like expected.",
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
		name:"loop",
		instructions:[
			"Wait until the whole sound was played and check if it starts again."
		],
		expectedResult:"After playing the first time the sound startet again.",
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
		name:"autoplay",
		instructions:[
			"After clicking the 'GO' button the sound should automatically start."
		],
		expectedResult:"The sound started automatically",
		test:function(t){
			dohx.showInfo('<audio id="audio1200" autoplay></audio>');
			__audioNodeTest = embed.query("#audio1200")[0];
			__audioNodeTest.src = __loopToTest;
			__audioNodeTest.controls = true;
		}
	},
	{
		id:1300,
		name:"volume",
		expectedResult:"A sound with low volume is played.",
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
		name:"event type volumechange",
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
		name:"volume, throw INDEX_SIZE_ERR",
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
		name:"muted",
		expectedResult:"The control shows that the sound is playing but you can't hear a sound.",
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
		name:"paused",
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
		name:" defaultPlaybackRate",
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
		name:" playbackRate",
		expectedResult:"The sound was played slower than normal.",
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
		name:" event type ratechange",
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