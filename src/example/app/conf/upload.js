'use strict';

//上传相关配置

angular.module("app")

.config(function (UploaderProvider) {
	// 优化retina, 在retina下这个值是2
    var ratio = window.devicePixelRatio || 1;
	UploaderProvider.defaults = {
		server : "http://oc.zhouyao.dev.ayibang.cn/upload.php",
		accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,png,JPG,GIF,PNG',
            mimeTypes: 'image/*'
        },
        thumb  : {
            width: 120 * ratio,
            height: 120 * ratio,
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
});