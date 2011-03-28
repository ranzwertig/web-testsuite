//	Test set for 
//		.mp2 MPEG 1 Audio, Layer 2
//	tag. This file tests the audio element support for .mp2
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// Global vars to setup the audio sources for the included tests
	__loopToTest = localAudioFiles.loopMp2;
	__songToTest = localAudioFiles.songMp2;
	// Some tests will use this. Its global, so tearDown can access it too and clean up properly.
	__audioNode = embed.query("audio")[0];
	
	dohx.add({name:"FMPEG_1_Audio_Layer_2_MP2",
		mqcExecutionOrderBaseOffset:650000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests: __audioFunctionTests // This is used to include the tests defined in w3c/audio/functions.js
	});
})();
