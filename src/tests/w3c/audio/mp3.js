//	Test set for 
//		.mp3 MPEG 1 Audio, Layer 3 (MP3)
//	tag. This file tests the audio element support for .mp3
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// Global vars to setup the audio sources for the included tests
	__loopToTest = localAudioFiles.loopMp3;
	__songToTest = localAudioFiles.songMp3;
	__mediaMimeType = 'audio/mp3';
	// Some tests will use this. Its global, so tearDown can access it too and clean up properly.
	__audioNode = embed.query("audio")[0];
	__audioNode.src = __loopToTest;
	
	dohx.add({name:"MPEG_1_Audio_Layer_3_MP3",
		mqcExecutionOrderBaseOffset:620000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests: __audioFunctionTests // This is used to include the tests defined in w3c/audio/functions.js
	});
})();
