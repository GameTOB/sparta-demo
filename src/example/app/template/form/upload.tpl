<div class="row">
<div class="col-xs-12">

	<div class="ibox" ng-controller="app.form.uploadAvatarCtrl">
		<div class="ibox-title">
			选取头像的案例 (只能1张 , 单张照片大小须小于2M) (重新选取可自动替换上次所选)
		</div>
		<div class="ibox-content">
			<div class="alert alert-success" ng-if="avatar">您已保存完头像 ，可继续其他操作</div>
			<div name="avatarUploader" uploader-init="uploaderOptions">
				<p ng-if="errorType" class="alert alert-warning">{{errorType | uploadErrorMessage : $uploader.options}} , 这里用 errorType:{{errorType}} 实现只是模板上用filter的举例而已</p> 
				<p ng-if="$uploader.files.length > 0">
				<img  
					uploader-thumb="$uploader.files[0]" 
					alt="{{$uploader.files[0].name}}" />
					<button class="btn btn-danger fa fa-times" ng-if="$uploader.files[0].getStatus()=='inited'" ng-click="$uploader.removeFile($uploader.files[0])"></button>
					<button class="btn btn-success fa fa-check" ng-if="$uploader.files[0].getStatus()=='complete'" disabled></button>
					<p ng-if="$uploader.files[0].getStatus()=='complete'">已上传 ，<a href="{{avatar}}" target="_blank">点此查看</a></p>
				</p>

				<p>
				<button 
				uploader-pick 
				pick-multiple 
				ng-if="!$uploader.isFinished()"
				ng-disabled="$uploader.isInProgress()" 
				class="btn btn-info">选取
			    </button> 
			    <button class="btn btn-primary" 
			    ng-if="$uploader.files.length > 0 && !$uploader.isFinished()" 
			    ng-click="$uploader.upload();" 
			    ng-disabled="$uploader.isInProgress()" 
			    ng-switch="$uploader.isInProgress()">
					<span ng-switch-default>保存</span>
                    <span ng-switch-when="true">保存中...</span>
			    </button></p>
			</div>
		</div>
	</div>

	<div class="ibox" ng-controller="app.form.uploadPhotosCtrl">
		<div class="ibox-title">
			选取照片案例 (至少2张，最多3张 , 所有照片大小之和须小于10M)
		</div>
		<div class="ibox-content">
			<div class="alert alert-success" ng-if="photos.length>0">您已上传完毕照片 ，可继续其他操作</div>
			<div name="photosUploader" class="row" uploader-init="uploaderOptions">
				<p ng-if="errorMessage" class="alert alert-warning">{{errorMessage}}</p>
				<div class="col-xs-3" ng-repeat="file in $uploader.files">
				    <div class="thumbnail">
				    	<img  uploader-thumb="file" 
							alt="{{file.name}}" />
				      <div class="caption">
				        <p>
				        	<button class="btn btn-danger fa fa-times" ng-if="file.getStatus()=='inited'" ng-click="$uploader.removeFile(file)"></button>
				        </p>
				        <p ng-if="file.getStatus()=='complete'">已上传 ，<a href="{{photos[$index]}}" target="_blank">点此查看</a></p>
				      </div>
				    </div>
				</div>
				<div class="col-xs-12">
				<button 
				uploader-pick 
				pick-multiple 
				ng-if="!$uploader.isFinished()"
				ng-disabled="$uploader.isInProgress()" 
				class="btn btn-info">选取
			    </button> 
			    <button class="btn btn-primary" 
			    ng-if="$uploader.files.length > 0 && !$uploader.isFinished()" 
			    ng-click="$uploader.upload();" 
			    ng-disabled="$uploader.isInProgress()" 
			    ng-switch="$uploader.isInProgress()">
					<span ng-switch-default>上传</span>
                    <span ng-switch-when="true">上传中...</span>
			    </button></p>
			</div>
		</div>
	</div>
</div>
</div>