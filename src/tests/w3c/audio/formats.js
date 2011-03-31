//	Test set for 
//		audio formats
//	tag. This file tests the supported file formats.
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// All tests will use this. Its global, so tearDown can access it too and clean up properly.
	var audioNode = embed.query("audio")[0];
	
	dohx.add({
		mqcExecutionOrderBaseOffset:590000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests:[
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
			
			//
			//	test wav format
			//
			{
				id:100,
				name:"Play wav file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopWav;
					audioNode.play();
				}
			},
			//
			//	test flac format
			//
			{
				id:200,
				name:"Play flac file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopFlac;
					audioNode.play();
				}
			},
			//
			//	test m4a format
			//
			{
				id:300,
				name:"Play m4a file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopM4a;
					audioNode.play();
				}
			},
			//
			//	test mp2 format
			//
			{
				id:400,
				name:"Play mp2 file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopMp2;
					audioNode.play();
				}
			},
			//
			//	test mp3 format
			//
			{
				id:500,
				name:"Play mp3 file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopMp3;
					audioNode.play();
				}
			},
			//
			//	test ogg format
			//
			{
				id:600,
				name:"Play ogg file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopOgg;
					audioNode.play();
				}
			},
			//
			//	test webm format
			//
			{
				id:700,
				name:"Play webm file",
				expectedResult:"Can you hear a sound with a duration of about 6 seconds?",
				test:function(t){
					audioNode.src = localAudioFiles.loopWebm;
					audioNode.play();
				}
			}
		]
	});
})()