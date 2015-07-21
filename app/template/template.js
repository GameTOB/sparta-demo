(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/index.tpl',
    '<div id="wrapper" ng-controller="app.indexCtrl">\n' +
    '	<nav class="navbar-default navbar-static-side">\n' +
    '		<div class="sidebar-collapse">\n' +
    '			<h2>菜单</h2>\n' +
    '			<div id="side-menu" ui-menu root-data="menuData"></div>\n' +
    '		</div>\n' +
    '	</nav>\n' +
    '	<div id="page-wrapper" class="gray-bg">\n' +
    '		<div class="row">\n' +
    '			<div class="col-lg-12">\n' +
    '				<div ng-view></div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>	\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/readme.tpl',
    '<h1 id="-">说明</h1>\n' +
    '<h2 id="-">计划</h2>\n' +
    '<ol>\n' +
    '<li>06/19/2015 Menu</li>\n' +
    '</ol>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/form/upload.tpl',
    '<div class="row">\n' +
    '<div class="col-xs-12">\n' +
    '\n' +
    '	<div class="ibox" ng-controller="app.form.uploadAvatarCtrl">\n' +
    '		<div class="ibox-title">\n' +
    '			选取头像的案例 (只能1张 , 单张照片大小须小于2M) (重新选取可自动替换上次所选)\n' +
    '		</div>\n' +
    '		<div class="ibox-content">\n' +
    '			<div class="alert alert-success" ng-if="avatar">您已保存完头像 ，可继续其他操作</div>\n' +
    '			<div name="avatarUploader" uploader-init="uploaderOptions">\n' +
    '				<p ng-if="errorType" class="alert alert-warning">{{errorType | uploadErrorMessage : $uploader.options}} , 这里用 errorType:{{errorType}} 实现只是模板上用filter的举例而已</p> \n' +
    '				<p ng-if="$uploader.files.length > 0">\n' +
    '				<img  \n' +
    '					uploader-thumb="$uploader.files[0]" \n' +
    '					alt="{{$uploader.files[0].name}}" />\n' +
    '					<button class="btn btn-danger fa fa-times" ng-if="$uploader.files[0].getStatus()==\'inited\'" ng-click="$uploader.removeFile($uploader.files[0])"></button>\n' +
    '					<button class="btn btn-success fa fa-check" ng-if="$uploader.files[0].getStatus()==\'complete\'" disabled></button>\n' +
    '					<p ng-if="$uploader.files[0].getStatus()==\'complete\'">已上传 ，<a href="{{avatar}}" target="_blank">点此查看</a></p>\n' +
    '				</p>\n' +
    '\n' +
    '				<p>\n' +
    '				<button \n' +
    '				uploader-pick \n' +
    '				pick-multiple \n' +
    '				ng-if="!$uploader.isFinished()"\n' +
    '				ng-disabled="$uploader.isInProgress()" \n' +
    '				class="btn btn-info">选取\n' +
    '			    </button> \n' +
    '			    <button class="btn btn-primary" \n' +
    '			    ng-if="$uploader.files.length > 0 && !$uploader.isFinished()" \n' +
    '			    ng-click="$uploader.upload();" \n' +
    '			    ng-disabled="$uploader.isInProgress()" \n' +
    '			    ng-switch="$uploader.isInProgress()">\n' +
    '					<span ng-switch-default>保存</span>\n' +
    '                    <span ng-switch-when="true">保存中...</span>\n' +
    '			    </button></p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div class="ibox" ng-controller="app.form.uploadPhotosCtrl">\n' +
    '		<div class="ibox-title">\n' +
    '			选取照片案例 (至少2张，最多3张 , 所有照片大小之和须小于10M)\n' +
    '		</div>\n' +
    '		<div class="ibox-content">\n' +
    '			<div class="alert alert-success" ng-if="photos.length>0">您已上传完毕照片 ，可继续其他操作</div>\n' +
    '			<div name="photosUploader" class="row" uploader-init="uploaderOptions">\n' +
    '				<p ng-if="errorMessage" class="alert alert-warning">{{errorMessage}}</p>\n' +
    '				<div class="col-xs-3" ng-repeat="file in $uploader.files">\n' +
    '				    <div class="thumbnail">\n' +
    '				    	<img  uploader-thumb="file" \n' +
    '							alt="{{file.name}}" />\n' +
    '				      <div class="caption">\n' +
    '				        <p>\n' +
    '				        	<button class="btn btn-danger fa fa-times" ng-if="file.getStatus()==\'inited\'" ng-click="$uploader.removeFile(file)"></button>\n' +
    '				        </p>\n' +
    '				        <p ng-if="file.getStatus()==\'complete\'">已上传 ，<a href="{{photos[$index]}}" target="_blank">点此查看</a></p>\n' +
    '				      </div>\n' +
    '				    </div>\n' +
    '				</div>\n' +
    '				<div class="col-xs-12">\n' +
    '				<button \n' +
    '				uploader-pick \n' +
    '				pick-multiple \n' +
    '				ng-if="!$uploader.isFinished()"\n' +
    '				ng-disabled="$uploader.isInProgress()" \n' +
    '				class="btn btn-info">选取\n' +
    '			    </button> \n' +
    '			    <button class="btn btn-primary" \n' +
    '			    ng-if="$uploader.files.length > 0 && !$uploader.isFinished()" \n' +
    '			    ng-click="$uploader.upload();" \n' +
    '			    ng-disabled="$uploader.isInProgress()" \n' +
    '			    ng-switch="$uploader.isInProgress()">\n' +
    '					<span ng-switch-default>上传</span>\n' +
    '                    <span ng-switch-when="true">上传中...</span>\n' +
    '			    </button></p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/form/validate.tpl',
    '<div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '    <div class="ibox">\n' +
    '        <div class="ibox-title"><h3 class="panel-title">表单校验样例</h3></div>\n' +
    '        <div class="ibox-content">\n' +
    '            <form novalidate class="form-horizontal" name="demoForm" ng-submit="save(demoForm)">\n' +
    '            <pre style="height:100px;overflow:auto;">{{user | json}}</pre>\n' +
    '            <div class="form-group has-feedback"\n' +
    '                        ng-class="{\'has-error\': (demoForm.$submitted || demoForm.name.$dirty) && demoForm.name.$invalid }">\n' +
    '                <label class="col-xs-2 control-label">用户名:</label>\n' +
    '                <div class="col-xs-6">\n' +
    '                    <input name="name" type="text" class="form-control"\n' +
    '                        ng-model="user.name"\n' +
    '                        ng-pattern="/^[A-Za-z]{1}[0-9A-Za-z_]+$/"\n' +
    '                        ui-validate = "{uniqueUsername:\'isUniqueUsername($value)\'}"\n' +
    '                        placeholder="请输入用户名 以字母开头"\n' +
    '                        maxlength="30"\n' +
    '                        required />\n' +
    '                    <span class="help-block">\n' +
    '                        [用户名] 是 (改变后||首次提交后)&&不合法时 显示错误<br/>\n' +
    '                         (demoForm.$submitted || demoForm.name.$dirty) && demoForm.name.$invalid <br/>\n' +
    '                        提供检查用户名重复的样例:isUniqueUsername($modelValue)<br/>样例中长度超过5则提示用户名重复\n' +
    '                    </span>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.name.$error" ng-show=" (demoForm.$submitted || demoForm.name.$dirty) && demoForm.name.$invalid">\n' +
    '                    <span ng-message="required">不能为空</span>\n' +
    '                    <span ng-message="pattern">以字母开头 且长度大于1</span>\n' +
    '                    <span ng-message="uniqueUsername">用户名重复</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group has-feedback"\n' +
    '                        ng-class="{\'has-error\': (demoForm.$submitted || demoForm.password.$dirty) && demoForm.password.$invalid }">\n' +
    '                <label class="col-xs-2 control-label">设置密码:</label>\n' +
    '                <div class="col-xs-6">\n' +
    '                    <input name="password" type="password" class="form-control"\n' +
    '                        ng-model="user.password"\n' +
    '                        ng-minlength="6"\n' +
    '                        placeholder="请输入密码"\n' +
    '                        ui-validate="{complexity:\'isComplexity($value)\'}"\n' +
    '                        required />\n' +
    '                    <span class="help-block">\n' +
    '                        [设置密码] 是 (改变后||首次提交后)&&不合法时 显示错误<br/>\n' +
    '                        (demoForm.$submitted || demoForm.password.$dirty) && demoForm.password.$invalid <br/>\n' +
    '                        提供检查密码复杂度的样例:isComplexity($modelValue)<br/>\n' +
    '                        样例中要求必须包含英文字母\n' +
    '                    </span>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.password.$error" ng-show=" (demoForm.$submitted || demoForm.password.$dirty) && demoForm.password.$invalid">\n' +
    '                    <span ng-message="complexity">密码复杂度不够</span>\n' +
    '                    <span ng-message="minlength">长度不能小于6</span>\n' +
    '                    <span ng-message="required">不能为空</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group has-feedback"\n' +
    '                        ng-class="{\'has-error\': (demoForm.$submitted || demoForm.confirmPassword.$dirty) && demoForm.confirmPassword.$invalid }">\n' +
    '                <label class="col-xs-2 control-label">确认密码:</label>\n' +
    '                <div class="col-xs-6">\n' +
    '                    <input name="confirmPassword" type="password" class="form-control"\n' +
    '                        ng-model="user.confirmPassword"\n' +
    '                        placeholder="请再次输入密码"\n' +
    '                        ui-validate="{sameAsPassword:\'!user.password || $value==user.password\'}"\n' +
    '                        ui-validate-watch="\'user.password\'"\n' +
    '                        required />\n' +
    '                    <span class="help-block">\n' +
    '                        [确认密码] 是 首次提交后&&不合法时 显示错误<br/>\n' +
    '                        demoForm.$submitted && demoForm.confirmPassword.$invalid <br/>\n' +
    '                        确认密码检查是否和密码录入一致 直接写了expression\n' +
    '                    </span>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.confirmPassword.$error" ng-show=" (demoForm.$submitted || demoForm.confirmPassword.$dirty) && demoForm.confirmPassword.$invalid">\n' +
    '                    <span ng-message="sameAsPassword">请与设置的密码保持一致</span>\n' +
    '                    <span ng-message="required">不能为空</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group has-feedback"\n' +
    '                        ng-class="{\'has-error\': demoForm.$submitted && demoForm.realname.$invalid }">\n' +
    '                <label class="col-xs-2 control-label">姓名:</label>\n' +
    '                <div class="col-xs-6">\n' +
    '                    <input name="realname" type="text" class="form-control"\n' +
    '                        ng-model="user.realname"\n' +
    '                        ng-minlength="1"\n' +
    '                        placeholder="请输入姓名"/>\n' +
    '                    <span class="help-block">\n' +
    '                        [姓名]是 首次提交后&&不合法 显示错误 <br/>\n' +
    '                        demoForm.$submitted  && demoForm.realname.$invalid<br/>\n' +
    '                        不做必填要求 \n' +
    '                    </span>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.realname.$error" ng-show="demoForm.$submitted && demoForm.realname.$invalid">\n' +
    '                    <span ng-message="minlength">长度不能小于1</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            \n' +
    '            <div class="form-group has-feedback"\n' +
    '                        ng-class="{\'has-error\': demoForm.$submitted && demoForm.mobile.$invalid }">\n' +
    '                <label class="col-xs-2 control-label">手机号:</label>\n' +
    '                <div class="col-xs-6">\n' +
    '                    <input name="mobile" type="text" class="form-control"\n' +
    '                        ng-model="user.mobile"\n' +
    '                        ng-pattern="ValidatePattern.mobile"\n' +
    '                        placeholder="请输入手机号"\n' +
    '                        required/>\n' +
    '                    <span class="help-block">\n' +
    '                        [手机号]及之后 是 首次提交后&&不合法 显示错误 <br/>\n' +
    '                        demoForm.$submitted  && demoForm.mobile.$invalid\n' +
    '                    </span>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.mobile.$error" ng-show="demoForm.$submitted && demoForm.mobile.$invalid">\n' +
    '                    <span ng-message="required">不能为空</span>\n' +
    '                    <span ng-message="pattern">格式不对</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group has-feedback"\n' +
    '                        ng-class="{\'has-error\': demoForm.$submitted && demoForm.email.$invalid }">\n' +
    '                <label class="col-xs-2 control-label">邮箱:</label>\n' +
    '                <div class="col-xs-6">\n' +
    '                    <input name="email" type="email" class="form-control"\n' +
    '                        ng-model="user.email"\n' +
    '                        placeholder="请输入邮箱"/>\n' +
    '                    <span class="help-block">\n' +
    '                        [手机号]及之后 是 首次提交后&&不合法 显示错误 <br/>\n' +
    '                        demoForm.$submitted  && email.mobile.$invalid<br/>\n' +
    '                        不做必填要求 \n' +
    '                    </span>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.email.$error" ng-show="demoForm.$submitted && demoForm.email.$invalid">\n' +
    '                    <span ng-message="email">格式不对</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    \n' +
    '            <div class="hr-line-dashed"></div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-xs-8 col-xs-offset-2">\n' +
    '                    <button type="submit"  class="btn btn-info" ng-disabled="demoForm.$submitting" ng-switch="demoForm.$submitting">\n' +
    '                    <span ng-switch-default>提交</span>\n' +
    '                    <span ng-switch-when="true">提交中...</span>\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    \n' +
    '\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/template/form/ng-model.tpl',
    '<h1 id="ngmodel">ngModel</h1>\n' +
    '<form novalidate class="form-horizontal" name="demoForm" ng-submit="save(demoForm,$event)">\n' +
    '<pre style="height:100px;">{{user | json}}</pre>\n' +
    '\n' +
    '<div class="form-group has-feedback"\n' +
    '            ng-class="{\'has-error\': (demoForm.$submitted || demoForm.mobile.$dirty) && demoForm.mobile.$invalid }">\n' +
    '    <label class="col-xs-2 control-label">手机号:</label>\n' +
    '    <div class="col-xs-4">\n' +
    '        <input name="mobile" type="text" class="form-control"\n' +
    '            ng-model="user.mobile"\n' +
    '            placeholder="请输入手机号"\n' +
    '            required/>\n' +
    '        <div class="help-block error-message" ng-show=" (demoForm.$submitted || demoForm.mobile.$dirty) && demoForm.mobile.$invalid">\n' +
    '            <span ng-if="demoForm.mobile.$error.required">不能为空</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '        <div class="col-xs-8 col-xs-offset-2">\n' +
    '            <button type="submit"  class="btn btn-info" ng-disabled="demoForm.$submitting" ng-switch="demoForm.$submitting">\n' +
    '            <span ng-switch-default>提交</span>\n' +
    '            <span ng-switch-when="true">提交中...</span>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <div class="col-xs-4">\n' +
    '    <pre>{{demoForm | json}}</pre>\n' +
    '    </div>\n' +
    '    <div class="col-xs-4">\n' +
    '    <pre>{{formElement | json}}</pre>\n' +
    '    <pre>{{formSerializeArray | json}}</pre>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '</form>');
}]);
})();
