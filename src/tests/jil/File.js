/*
	Copyright 2010-2011 Vodafone Group Services GmbH
	
	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at
	
		http://www.apache.org/licenses/LICENSE-2.0
	
	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
(function(){
	if (!util.isConfigured([
		"fileSystem.readableFile",
		"fileSystem.readablePath",
		"fileSystem.writeablePath",
	])){
		return;
	}
	
	function showFileInfo(fileInfo){
// TODO just here because iterating over the fileprops doesnt work, using toJson()
		var ret = [];
		for (var i=0, l=fileProperties.length; i<l; i++){
			var p = fileProperties[i];
			ret.push(p+": "+embed.toJson(fileInfo[p] || ""));
		}
		return ret.join(", ");
	}
	
	var cfs = config.fileSystem;
	var fileProperties = ["createDate", "fileName", "filePath", "fileSize", "isDirectory", "lastModifyDate"];
	
	// Lets create a unique name for this test, so we never clash with
	// existing files created by tests before.
	// Suffix the filename with the test-case name e.g. "copy" or "delete" to create a unique filename for a set
	// of test cases.
	var _destFile = cfs.writeablePath + "test-" + new Date().getTime();
	var testPath = cfs.emptyReadableDirectory;
	
	var w = util.isObject("Widget") ? Widget : {};
	var wd = util.isObject("Widget.Device") ? Widget.Device : {};
	
	//
	//	File tests
	//
	dohx.add({name:"File methods",
		mqcExecutionOrderBaseOffset:190000, // This number is the base offset for the execution order, the test ID gets added. Never change this number unless you know what you are doing.
		requiredObjects:["Widget.Device.getFile"],
		tests:[
			{
				id:1,
				name:"Verify Preconditions",
				instructions:[
					"Make sure all the preconditions listed are met. They will be required by upcoming tests.",
					"Copy the folder 'test-photo' into the photo directory on the phone. (The exact name of the destination folder may vary on your device.)",
					"Click 'GO' to start testing."
				],
				test:function(t){
					t.success("Preconditions met, user confirmed.");
				}
			},
			//
			//	copyFile()
			//
			{
				id:100,
				name:"[1] copyFile - Copy '"+ cfs.readableFile +"'.",
				requiredObjects:["Widget.Device.copyFile"],
				instructions:"Make sure the file '" + cfs.readableFile + "' exists.",
				test:function(t){
					wd.copyFile(cfs.readableFile, _destFile+"-copy");
					t.success("No exception thrown, means success.");
				}
			},
			{
				id:200,
				name:"[2] copyFile - Verify that copied file exists.",
				requiredObjects:["Widget.Device.getFile"],
				mustSupportApis:["Widget.Device.copyFile"], // Depends on the above test, if the copy there is not supported this test is useless.
				test:function(t){
					var ret = wd.getFile(_destFile+"-copy");
					t.assertNotEqual(null, ret);
					return ret;
				}
			},
			{
				id:210,
				name:"copyFile - Copy a directory.",
				requiredObjects:["Widget.Device.copyFile", "Widget.Device.getFile"], 
				test:function(t){
					wd.copyFile(testPath, testPath + "-copyDirectory");
					var ret = wd.getFile(testPath + "-copyDirectory");
					t.assertTrue(ret && ret.isDirectory, "Copied directory not found.");
					return ret;
				}
			},
			{
				id:220,
				name:"copyFile - Copy a directory again (destination exists), should throw INVALID_PARAMETER.",
				requiredObjects:["Widget.Device.copyFile"], 
				test:function(t){
					try{
						wd.copyFile(testPath, testPath + "-copyDirectory");
						t.failure("Expected INVALID_PARAMETER exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
				}
			},
			//
			//	deleteFile()
			//
			{
				id:300,
				name:"[1] deleteFile - Verify that it returns true.",
				requiredObjects:["Widget.Device.copyFile", "Widget.Device.deleteFile"],
				test:function(t){
// TODO the following three tests could be in one test, once mutliple asserts inside one test work again, imho.
					wd.copyFile(cfs.readableFile, _destFile+"-delete");
					// File should get removed.
					var ret = wd.deleteFile(_destFile+"-delete");
					t.assertTrue(ret, "Method deleteFile() didn't return true (for success).");
					return ret;
				}
			},
			{
				id:400,
				name:"[2] deleteFile - Verify that file doens't exist anymore.",
				mustSupportApis:["Widget.Device.deleteFile"], // Depends on the test before
				test:function(t){
					try {
						var ret = wd.getFile(_destFile+"-delete");
						t.failure("Method getFile() didn't throw exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
					return ret;
				}
			},
			{
				id:500,
				name:"[3] deleteFile - Check that deleting again throws exception.",
				requiredObjects:["Widget.Device.deleteFile"],
				test:function(t){
					try {
						var ret = wd.deleteFile(_destFile+"-delete");
						t.failure("Method getFile() didn't throw exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
					return ret;
				}
			},
			//
			// deleteFile() on directories.
			//
			{
				id:510,
				name:"[1] deleteFile - Apply it on a path.",
				requiredObjects:["Widget.Device.deleteFile"],
				instructions:"Make sure an empty directory '" + testPath + "' exists.",
				test:function(t){
					var ret = wd.deleteFile(testPath + "-copyDirectory");
					t.success("No exception thrown, means success.");
				}
			},
			{
				id:520,
				name:"[2] deleteFile(path) - Verify that path doens't exist anymore.",
				requiredObjects:["Widget.Device.getFile"],
				mustSupportApis:["Widget.Device.deleteFile"], // Depends on the test before
				test:function(t){
					try {
						var ret = wd.getFile(testPath+"-delete");
						t.failure("Method getFile() didn't throw exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
					return ret;
				}
			},
			{
				id:530,
				name:"[3] deleteFile - Check that deleting again throws exception.",
				requiredObjects:["Widget.Device.deleteFile"],
				test:function(t){
					try {
						var ret = wd.deleteFile(_destFile+"-delete");
						t.failure("Method getFile() didn't throw exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
					return ret;
				}
			},
			
			//
			//	onFilesFound
			//
			{
				id:600,
				name:"findFiles, onFilesFound - Search for {fileName:'*.jpg'}.",
				requiredObjects:["Widget.Device.findFiles"],
				mustSupportApis:["Widget.Device.onFilesFound"],
				timeout:5*1000,
				test:function(t){
					wd.onFilesFound = function(files) {
						t.success("onFilesFound was called.");
						t.result = files;
					}
					var f = new wd.File();
					f.fileName = "*.jpg";
					wd.findFiles(f, 0, 10);
				},
				tearDown:function(){
					// Clean up.
					delete wd.onFilesFound;
				}
			},
			{
				id:610,
				name:"findFiles, onFilesFound - Search for {pathName:'/virtual/', fileName:'*.jpg'}.",
				requiredObjects:["Widget.Device.findFiles"],
				mustSupportApis:["Widget.Device.onFilesFound"],
				timeout:5*1000,
				test:function(t){
					wd.onFilesFound = function(files) {
						t.success("onFilesFound was called.");
						t.result = files;
					}
					var f = new wd.File();
					f.fileName = "*.jpg";
					f.filePath = "/virtual/";
					wd.findFiles(f, 0, 10);
				},
				tearDown:function(){
					// Clean up.
					delete wd.onFilesFound;
				}
			},
			{
				id:620,
				name:"findFiles, onFilesFound - Search for {pathName:'/virtual/photos', fileName:'*.jpg'}.",
				requiredObjects:["Widget.Device.findFiles"],
				mustSupportApis:["Widget.Device.onFilesFound"],
				timeout:5*1000,
				test:function(t){
					wd.onFilesFound = function(files) {
						t.success("onFilesFound was called.");
						t.result = files;
					}
					var f = new wd.File();
					f.fileName = "*.jpg";
					f.filePath = "/virtual/photos";
					wd.findFiles(f, 0, 10);
				},
				tearDown:function(){
					// Clean up.
					delete wd.onFilesFound;
				}
			},
			{
				id:630,
				name:"findFiles, onFilesFound - Search for {pathName:'*', fileName:'*.jpg'}.",
				requiredObjects:["Widget.Device.findFiles"],
				mustSupportApis:["Widget.Device.onFilesFound"],
				timeout:5*1000,
				test:function(t){
					wd.onFilesFound = function(files) {
						t.success("onFilesFound was called.");
						t.result = files;
					}
					var f = new wd.File();
					f.fileName = "*.jpg";
					f.filePath = "*";
					wd.findFiles(f, 0, 10);
				},
				tearDown:function(){
					// Clean up.
					delete wd.onFilesFound;
				}
			},
			//
			//	getDirectoryFileNames()
			//
			{
				id:700,
				name:"getDirectoryFileNames - Read from path '"+ cfs.readablePath +"'.",
				requiredObjects:["Widget.Device.getDirectoryFileNames"],
				test:function(t){
					var path = cfs.readablePath;
					var files = wd.getDirectoryFileNames(path);
					t.assertTrue(util.isArray(files), "Return value is not an array.");
// TODO when multiple asserts work fix the following
					//if (files.length>0){
					//	t.assertTrue(wd.getFile(TMP_PATH+PATH_SEPARATOR+files[0]) != null);
					//}
					return files;
				}
			},
			{
				id:800,
				name:"getDirectoryFileNames - Read from path '/virtual/'.",
				requiredObjects:["Widget.Device.getDirectoryFileNames"],
				test:function(t){
					var files = wd.getDirectoryFileNames('/virtual/');
					t.assertTrue(util.isArray(files), "Return value is not an array.");
					return files;
				}
			},
			{
				id:810,
				name:"getDirectoryFileNames - Find directory "+ testPath +".",
				requiredObjects:["Widget.Device.getDirectoryFileNames"],
				test:function(t){
					var files = wd.getDirectoryFileNames('/virtual/photos/test-photo/');
					t.assertTrue(files.indexOf("testdir")!=-1, "Expected 'testdir' to be in /virtual/photos/test-photo, not found.");
				}
			},
			{
				id:900,
				// By spec an invalid dir should throw ExceptionTypes.INVALID_PARAMETER.
				name:"getDirectoryFileNames - Using invalid directory should throw ExceptionTypes.INVALID_PARAMETER.",
				requiredObjects:["Widget.Device.getDirectoryFileNames"],
				test:function(t){
					try{
						var dirs = wd.getDirectoryFileNames("/reallystrangeAndNOTEXISTING_PATH");
						t.failure("Should have thrown an exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
					return dirs;
				}
			},
			//
			//	getFile()
			//
			{
				id:1100,
				// By spec an invalid file should throw INVALID_PARAMETER.
				name:" getFile - An invalid file should throw INVALID_PARAMETER.",
				test:function(t){
					try{
						var file = wd.getFile("/notEXISTING_FILE.JOJO");
						t.failure("Should have thrown an exception.");
					}catch(e){
						t.assertJilException(e, w.ExceptionTypes.INVALID_PARAMETER);
						return e;
					}
					return file;
				}
			},
			{
				id:1200,
				name:"getFile, File - Verify properties of 'Widget.Device.File' object.",
				test:function(t){
					var f = wd.getFile(cfs.readableFile);
					var check = util.checkProperties(f, fileProperties);
					t.assertTrue(check.missing.length==0, "Missing properties: " + check.missing.join(", ") + "!");
					return showFileInfo(f);
				}
			},
			{
				id:1300,
				name:"getFile, File - Verify types of properties of 'Widget.Device.File' object.",
				test:function(t){
					var f = wd.getFile(cfs.readableFile);
					// Check all the types, using whatever method fits best :).
					var testFor = {
						"createDate":function(){ return f.createDate instanceof Date }, // Is it a date?
						"fileName":function(){ return (""+f.fileName)==f.fileName }, // Is it a string?
						"filePath":function(){ return (""+f.filePath)==f.filePath }, // Is it a string?
						"fileSize":function(){ return !isNaN(f.fileSize) }, // Is it a number?
						"isDirectory":function(){ return (!!(f.isDirectory))==f.isDirectory }, // Is it a boolean?
						"lastModifyDate":function(){ return f.lastModifyDate instanceof Date } // Is it a date?
					};
					var failed = [];
					for (var testProp in testFor){
						if (typeof f[testProp]=="undefined"){
							failed.push(testProp + " is undefined");
						} else if (!testFor[testProp]()){
							failed.push("Wrong type '" + testProp + "' is of type: '"+ (typeof f[testProp]) +"'.\n");
						}
					}
					t.assertTrue(failed.length==0, "Errors found: " + failed.join(", "));
				}
			},
			{
				id:1400,
				name:"getFileSystemRoots - Verify that an array is returned.",
				requiredObjects:["Widget.Device.getFileSystemRoots"],
				test:function(t){
					var roots = wd.getFileSystemRoots();
					t.assertTrue(util.isArray(roots), "Return value is not an array.");
// TODO when multiple asserts work uncomment the following line
					//t.assertTrue(roots.length>0, "No file system roots found.");
					return roots;
				}
			},
			{
				id:1500,
				name:"getFileSystemSize - Read sizes of all fileSystemRoots.",
				requiredObjects:["Widget.Device.getFileSystemSize", "Widget.Device.getFileSystemRoots"],
				test:function(t){
					var roots = wd.getFileSystemRoots();
					var sizes = [], result = true, size;
					for (var i=0, l=roots.length; i<l; i++){
						size = wd.getFileSystemSize(roots[i]);
						sizes.push(size);
						result = !util.isNumber(size) || !result ? false : true;
					}
					t.assertTrue(result);
					return sizes;
				}
//			},{
//				id:1600,
//				name:"moveFile",
//				requiredObjects:["Widget.Device.moveFile", "Widget.Device.deleteFile", "Widget.Device.getFile"],
//				setUp:function(){
//// TODO create file automatically, then we can remove the line below
//					if (!cfs.readableFile || !cfs.writeablePath){
//						throw new Error("Missing readableFile and writeablePath in config.fileSystem!");
//					}
//				},
//				test:function(t){
//					var src = readableFile,
//						dest = TEST_FILE + "_moved";
//					wd.deleteFile(dest);
//					// Move file.
//					t.assertTrue(wd.moveFile(src, dest), "Move file didn't return 'true'.");
//// TODO when multiple asserts work uncomment the following line
//					//// Verify that new file exist.
//					//t.assertTrue(wd.getFile(dest)!=null, "Method getFile(dest) did return 'null', though file should eixst.");
//					//t.assertTrue(wd.getFile(src)==null, "Method getFile(src) did NOT return 'null', though file should NOT eixst.");
			}
//*/
		]
	});
})();
