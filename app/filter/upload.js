'use strict';

angular.module("app")

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
});