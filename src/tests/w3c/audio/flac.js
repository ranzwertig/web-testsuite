//	Test set for 
//		.flac FLAC
//	tag. This file tests the audio element support for .flac
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// Global vars to setup the audio sources for the included tests
	__loopToTest = localAudioFiles.loopFlac;
	__songToTest = localAudioFiles.songFlac;
	__mediaMimeType = 'audio/flac';
	// Some tests will use this. Its global, so tearDown can access it too and clean up properly.
	__audioNode = embed.query("audio")[0];
	__audioNode.src = __loopToTest;
	
	dohx.add({name:"Flac_FLAC",
		mqcExecutionOrderBaseOffset:640000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests: __audioFunctionTests // This is used to include the tests defined in w3c/audio/functions.js
	});
})();
