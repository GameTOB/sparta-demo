'use strict';

angular.module("app")

//通用的配置在 app/conf/upload.js

//相关的过滤器在 app/filter/upload.js

.controller("app.form.uploadCtrl", function($rootScope , $scope, $timeout) {
	//空    
})


.controller("app.form.uploadAvatarCtrl", function($rootScope , $scope, $timeout) {

	$scope.avatar = "";

	$scope.uploaderOptions = {
		//限制单张图片大小
		fileSingleSizeLimit: 1024 * 1024 * 2,
		//限制最多上传数
        fileNumLimit : 1,
    };

   	$scope.errorType = "";
   	var errorTimerFlag = false;

   	//"avatarUploader" 为 *[uploaderInit] 所在元素中的 $attrs.name
    $scope.$on("avatarUploader::error" , function($event , $uploader , errorType , file , max){
        console.log("errortype:",errorType , file);
        //上传头像只允许一张图 如果超过一张则替代之前那张
        if(errorType == "Q_EXCEED_NUM_LIMIT"){
        	var files = $uploader.getFiles();
        	if(files.length > 0){
        		$uploader.removeFile(files[0]);
        		$uploader.addFile(file);
        	}
        }else {
        	if(!errorTimerFlag){
        		errorTimerFlag = true;
        		$timeout(function(){
	        		errorTimerFlag = false;
	        		$scope.errorType = "";
	        	},3000);
        	}

        	$scope.errorType = errorType;
        }
    });

    $scope.$on("avatarUploader::uploadSuccess" , function($event , $uploader , file , res){
    	console.log("uploder::uploadSuccess" , res);
    	//此时可以保存头像...等等
    	$scope.avatar = res.result;
    })

})

.controller("app.form.uploadPhotosCtrl", function($rootScope , $scope, $timeout, $filter) {
	$scope.photos = [];
	$scope.errorMessage = "";
	$scope.uploaderOptions = {
		//限制上传的所有图片大小
		fileSizeLimit : 10*1024*1024,
		//限制上传的图片个数上限
        fileNumLimit : 3,
    };
    
    var showError = (function(){
    	var hasTimer = false;
    	return function(errorMessage){
    		if(!hasTimer){
	    		hasTimer = true;
	    		$timeout(function(){
	        		hasTimer = false;
	        		$scope.errorMessage = "";
	        	},2000);
	    	}
	    	$scope.errorMessage = errorMessage;
    	}
    })();

    //"photosUploader" 为 *[uploaderInit] 所在元素中的 $attrs.name
    $scope.$on("photosUploader::error" , function($event , $uploader , errorType , file , max){
        console.log("errortype:",errorType , file);
        $scope.errorType = errorType;
        showError($filter("uploadErrorMessage")(errorType , $uploader.options , "照片"));
    });

    $scope.$on("photosUploader::beforeUpload" , function($event , $uploader){
    	console.log("photosUploader::beforeUpload",$uploader);
    	if($uploader.files.length==1){
    		showError("请至少选择两张照片");
    		$event.preventDefault();
    	}
    });

    $scope.$on("photosUploader::uploadSuccess" , function($event , $uploader , file , res){
    	console.log("uploder::uploadSuccess" , res);
    	$scope.photos.push(res.result);
    })
    
})
