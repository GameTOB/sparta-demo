'use strict';

angular.module("app")

.controller("app.form.uploadCtrl", function($rootScope , $scope, $timeout, $q , UIAlert , ExampleData) {

    
})

.filter('uploadErrorMessage' , function(){
	var units = [ 'B', 'K', 'M', 'G', 'TB' ];
	var formatSize = function( size, pointLength, maxUnit ) {
            var unit , customUnits = [];
            if(angular.isUndefined(pointLength)){
            	pointLength = 2;
            }

            if(maxUnit){
            	units.some(function(unit){
            		customUnits.push(unit);
            		return maxUnit == unit;
            	});
            }else{
            	customUnits = units;
            }
            //提取基础单位B
            unit = customUnits.shift();
            while ( customUnits.length > 0 && size >= 1024 ) {
            	size = size / 1024;
            	unit = customUnits.shift();
            }

            return (unit === 'B' ? size : size.toFixed( pointLength )) +
                    unit;
     };

	return function(errorType , options , fileCalledName){
		var errorMessage = "",
			fileCalledName = fileCalledName || "文件";
		switch(errorType){
			case "F_EXCEED_SIZE":
				errorMessage = fileCalledName+"大小超限，上限为："+formatSize(options.fileSingleSizeLimit,0,'K');
				break;
			case "Q_EXCEED_SIZE_LIMIT":
				errorMessage = fileCalledName+"总大小超限，上限为："+formatSize(options.fileSizeLimit,0,'M');
				break;
    		case "Q_EXCEED_NUM_LIMIT":
    			errorMessage = fileCalledName+"总数量超出，上限为："+options.fileNumLimit+"个";
    			break;
    		case "Q_TYPE_DENIED":
    			errorMessage = fileCalledName+"格式不符合要求";
    			break;
	    	case "F_DUPLICATE":
	    		errorMessage = "你已选过该"+fileCalledName;
	    		break;
		}
		return errorMessage;
	};
})

.controller("app.form.uploadAvatarCtrl", function($rootScope , $scope, $timeout, $q , UIAlert , ExampleData) {

	$scope.avatar = "";

	$scope.uploaderOptions = {
		//auto: true,
		fileSingleSizeLimit: 1024 * 1024 * 1,
        fileNumLimit : 1,
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,png,JPG,GIF,PNG',
            mimeTypes: 'image/*'
        },
        server : "http://oc.zhouyao.dev.ayibang.cn/upload.php",
        thumb  : {
            width: 120,
            height: 120,
            // 图片质量，只有type为`image/jpeg`的时候才有效。
            quality: 80,

            // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
            allowMagnify: false,

            // 是否允许裁剪。
            crop: true,

            // 为空的话则保留原有图片格式。
            // 否则强制转换成指定的类型。
            type: 'image/jpeg'
        },
        chunked : false
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
    	$scope.avatar = res.result;
    })

})

.controller("app.form.uploadPhotosCtrl", function($rootScope , $scope, $timeout, $q , $filter , UIAlert , ExampleData) {
	$scope.photos = [];
	$scope.errorMessage = "";
	$scope.uploaderOptions = {
		fileSizeLimit : 10*1024*1024,
        fileNumLimit : 3,
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,png,JPG,GIF,PNG',
            mimeTypes: 'image/*'
        },
        server : "http://oc.zhouyao.dev.ayibang.cn/upload.php",
        thumb  : {
            width: 120,
            height: 120,
            // 图片质量，只有type为`image/jpeg`的时候才有效。
            quality: 80,

            // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
            allowMagnify: false,

            // 是否允许裁剪。
            crop: true,

            // 为空的话则保留原有图片格式。
            // 否则强制转换成指定的类型。
            type: 'image/jpeg'
        }
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
