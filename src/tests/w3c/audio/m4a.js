//	Test set for 
//		.m4a MPEG-4 AAC audio
//	tag. This file tests the audio element support for .m4a
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// Global vars to setup the audio sources for the included tests
	__loopToTest = localAudioFiles.loopM4a;
	__songToTest = localAudioFiles.songM4a;
	__mediaMimeType = 'audio/mp4';
	// Some tests will use this. Its global, so tearDown can access it too and clean up properly.
	__audioNode = embed.query("audio")[0];
	__audioNode.src = __loopToTest;
	
	dohx.add({name:"MPEG_4_AAC_audio_M4A",
		mqcExecutionOrderBaseOffset:650000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests: __audioFunctionTests // This is used to include the tests defined in w3c/audio/functions.js
	});
})();
