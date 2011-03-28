//	Test set for 
//		.webm Vorbis
//	tag. This file tests the audio element support for .webm
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// Global vars to setup the audio sources for the included tests
	__loopToTest = localAudioFiles.loopWebm;
	__songToTest = localAudioFiles.songWebm;
	// Some tests will use this. Its global, so tearDown can access it too and clean up properly.
	__audioNode = embed.query("audio")[0];
	
	dohx.add({name:"Vorbis_WEBM",
		mqcExecutionOrderBaseOffset:640000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests: __audioFunctionTests // This is used to include the tests defined in w3c/audio/functions.js
	});
})();
