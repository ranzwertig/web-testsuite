//	Test set for 
//		.wav Uncomp. 16-bit PCM audio (PCM S16 LE) 
//	tag. This file tests the audio element support for .wav
	
(function() {
	var cf = config.fileSystem;
	var localAudioFiles = cf.playableAudioFiles.relativePath;
	
	// Global vars to setup the audio sources for the included tests
	__loopToTest = localAudioFiles.loopWav;
	__songToTest = localAudioFiles.songWav;
	__mediaMimeType = 'audio/wav';
	// Some tests will use this. Its global, so tearDown can access it too and clean up properly.
	__audioNode = embed.query("audio")[0];
	__audioNode.src = __loopToTest;
	
	dohx.add({name:"wav_Uncomp_16_bit_PCM_audio_PCM",
		mqcExecutionOrderBaseOffset:610000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		tests: __audioFunctionTests // This is used to include the tests defined in w3c/audio/functions.js
	});
})();
