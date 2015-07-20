#upload
<div class="row">
<div class="col-xs-12">
	<div class="ibox" ng-controller="app.form.uploadAvatarCtrl">
		<div class="ibox-title">
			选取头像的案例
		</div>
		<div class="ibox-content">
			<div ng-if="avatar">已选头像地址:<a href="{{avatar}}" target="_blank">{{avatar}}</a></div>
			<div name="avatarUploader" uploader-init="uploaderOptions">
				<p ng-if="errorType" class="alert alert-warning">{{errorType | uploadErrorMessage : $uploader.options}} , 这里用 errorType:{{errorType}} 实现只是模板上用filter的举例而已</p> 
				<p ng-if="$uploader.files.length > 0">
				<img  
					uploader-thumb="$uploader.files[0]" 
					alt="{{$uploader.files[0].name}}" />
					<button class="btn btn-danger fa fa-times" ng-if="$uploader.files[0].getStatus()=='inited'" ng-click="$uploader.removeFile($uploader.files[0])"></button>
					<button class="btn btn-success fa fa-check" ng-if="$uploader.files[0].getStatus()=='complete'" disabled></button>
				</p>

				<p>
				<button 
				uploader-pick 
				pick-multiple 
				ng-if="!$uploader.isFinished()"
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
	<div class="ibox" ng-controller="app.form.uploadPhotosCtrl">
		<div class="ibox-title">
			选取照片案例
		</div>
		<div class="ibox-content">
			<div ng-if="photos.length>0">已上传照片:<a ng-repeat="photo in photos" href="{{photo}}" target="_blank">{{photo}}</a></div>
			<div name="photosUploader" class="row" uploader-init="uploaderOptions">
				<p ng-if="errorMessage" class="alert alert-warning">{{errorMessage}}</p>
				<div class="col-xs-3" ng-repeat="file in $uploader.files">
				    <div class="thumbnail">
				    	<img  uploader-thumb="file" 
							alt="{{file.name}}" />
				      <div class="caption">
				        <p>
				        	<button class="btn btn-danger fa fa-times" ng-if="file.getStatus()=='inited'" ng-click="$uploader.removeFile(file)"></button>
				        	<button class="btn btn-success fa fa-check" ng-if="file.getStatus()=='complete'" disabled></button>
				        </p>
				      </div>
				    </div>
				</div>
				<div style="height:100px;border:1px solid #ccc;display:table;" class="col-xs-8 row col-xs-offset-2" uploader-dnd uploader-paste>
					<p style="display:table-cell;text-align:center;vertical-align:middle;">请拖拽照片至此</p>
				</div>
				<div class="col-xs-12">
				<button 
				uploader-pick 
				pick-multiple 
				ng-if="!$uploader.isFinished()"
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