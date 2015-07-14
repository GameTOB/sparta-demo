# ngModel

<form novalidate class="form-horizontal" name="demoForm" ng-submit="save(demoForm,$event)">
<pre style="height:100px;">{{user | json}}</pre>

<div class="form-group has-feedback"
            ng-class="{'has-error': (demoForm.$submitted || demoForm.mobile.$dirty) && demoForm.mobile.$invalid }">
    <label class="col-xs-2 control-label">手机号:</label>
    <div class="col-xs-4">
        <input name="mobile" type="text" class="form-control"
            ng-model="user.mobile"
            placeholder="请输入手机号"
            required/>
        <div class="help-block error-message" ng-show=" (demoForm.$submitted || demoForm.mobile.$dirty) && demoForm.mobile.$invalid">
            <span ng-if="demoForm.mobile.$error.required">不能为空</span>
        </div>
    </div>
</div>
<div class="form-group">
        <div class="col-xs-8 col-xs-offset-2">
            <button type="submit"  class="btn btn-info" ng-disabled="demoForm.$submitting" ng-switch="demoForm.$submitting">
            <span ng-switch-default>提交</span>
            <span ng-switch-when="true">提交中...</span>
            </button>
        </div>
</div>
<div class="form-group">
	<div class="col-xs-4">
	<pre>{{demoForm | json}}</pre>
	</div>
	<div class="col-xs-4">
	<pre>{{formElement | json}}</pre>
	<pre>{{formSerializeArray | json}}</pre>
	</div>
</div>



</form>