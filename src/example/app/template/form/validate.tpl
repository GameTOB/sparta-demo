<div class="row">
    <div class="col-xs-12">
    <div class="ibox">
        <div class="ibox-title"><h3 class="panel-title">表单校验样例</h3></div>
        <div class="ibox-content">
            <form novalidate class="form-horizontal" name="demoForm" ng-submit="save(demoForm)">
            <pre style="height:100px;overflow:auto;">{{user | json}}</pre>
            <div class="form-group has-feedback"
                        ng-class="{'has-error': (demoForm.$submitted || demoForm.name.$dirty) && demoForm.name.$invalid }">
                <label class="col-xs-2 control-label">用户名:</label>
                <div class="col-xs-6">
                    <input name="name" type="text" class="form-control"
                        ng-model="user.name"
                        ng-pattern="/^[A-Za-z]{1}[0-9A-Za-z_]+$/"
                        ui-validate = "{uniqueUsername:'isUniqueUsername($value)'}"
                        placeholder="请输入用户名 以字母开头"
                        maxlength="30"
                        required />
                    <span class="help-block">
                        [用户名] 是 (改变后||首次提交后)&&不合法时 显示错误<br/>
                         (demoForm.$submitted || demoForm.name.$dirty) && demoForm.name.$invalid <br/>
                        提供检查用户名重复的样例:isUniqueUsername($modelValue)<br/>样例中长度超过5则提示用户名重复
                    </span>
                </div>
                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.name.$error" ng-show=" (demoForm.$submitted || demoForm.name.$dirty) && demoForm.name.$invalid">
                    <span ng-message="required">不能为空</span>
                    <span ng-message="pattern">以字母开头 且长度大于1</span>
                    <span ng-message="uniqueUsername">用户名重复</span>
                </div>
            </div>

            <div class="form-group has-feedback"
                        ng-class="{'has-error': (demoForm.$submitted || demoForm.password.$dirty) && demoForm.password.$invalid }">
                <label class="col-xs-2 control-label">设置密码:</label>
                <div class="col-xs-6">
                    <input name="password" type="password" class="form-control"
                        ng-model="user.password"
                        ng-minlength="6"
                        placeholder="请输入密码"
                        ui-validate="{complexity:'isComplexity($value)'}"
                        required />
                    <span class="help-block">
                        [设置密码] 是 (改变后||首次提交后)&&不合法时 显示错误<br/>
                        (demoForm.$submitted || demoForm.password.$dirty) && demoForm.password.$invalid <br/>
                        提供检查密码复杂度的样例:isComplexity($modelValue)<br/>
                        样例中要求必须包含英文字母
                    </span>
                </div>
                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.password.$error" ng-show=" (demoForm.$submitted || demoForm.password.$dirty) && demoForm.password.$invalid">
                    <span ng-message="complexity">密码复杂度不够</span>
                    <span ng-message="minlength">长度不能小于6</span>
                    <span ng-message="required">不能为空</span>
                </div>
            </div>

            <div class="form-group has-feedback"
                        ng-class="{'has-error': (demoForm.$submitted || demoForm.confirmPassword.$dirty) && demoForm.confirmPassword.$invalid }">
                <label class="col-xs-2 control-label">确认密码:</label>
                <div class="col-xs-6">
                    <input name="confirmPassword" type="password" class="form-control"
                        ng-model="user.confirmPassword"
                        placeholder="请再次输入密码"
                        ui-validate="{sameAsPassword:'!user.password || $value==user.password'}"
                        ui-validate-watch="'user.password'"
                        required />
                    <span class="help-block">
                        [确认密码] 是 首次提交后&&不合法时 显示错误<br/>
                        demoForm.$submitted && demoForm.confirmPassword.$invalid <br/>
                        确认密码检查是否和密码录入一致 直接写了expression
                    </span>
                </div>
                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.confirmPassword.$error" ng-show=" (demoForm.$submitted || demoForm.confirmPassword.$dirty) && demoForm.confirmPassword.$invalid">
                    <span ng-message="sameAsPassword">请与设置的密码保持一致</span>
                    <span ng-message="required">不能为空</span>
                </div>
            </div>

            <div class="form-group has-feedback"
                        ng-class="{'has-error': demoForm.$submitted && demoForm.realname.$invalid }">
                <label class="col-xs-2 control-label">姓名:</label>
                <div class="col-xs-6">
                    <input name="realname" type="text" class="form-control"
                        ng-model="user.realname"
                        ng-minlength="1"
                        placeholder="请输入姓名"/>
                    <span class="help-block">
                        [姓名]是 首次提交后&&不合法 显示错误 <br/>
                        demoForm.$submitted  && demoForm.realname.$invalid<br/>
                        不做必填要求 
                    </span>
                </div>
                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.realname.$error" ng-show="demoForm.$submitted && demoForm.realname.$invalid">
                    <span ng-message="minlength">长度不能小于1</span>
                </div>
            </div>

            
            <div class="form-group has-feedback"
                        ng-class="{'has-error': demoForm.$submitted && demoForm.mobile.$invalid }">
                <label class="col-xs-2 control-label">手机号:</label>
                <div class="col-xs-6">
                    <input name="mobile" type="text" class="form-control"
                        ng-model="user.mobile"
                        ng-pattern="ValidatePattern.mobile"
                        placeholder="请输入手机号"
                        required/>
                    <span class="help-block">
                        [手机号]及之后 是 首次提交后&&不合法 显示错误 <br/>
                        demoForm.$submitted  && demoForm.mobile.$invalid
                    </span>
                </div>
                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.mobile.$error" ng-show="demoForm.$submitted && demoForm.mobile.$invalid">
                    <span ng-message="required">不能为空</span>
                    <span ng-message="pattern">格式不对</span>
                </div>
            </div>

            <div class="form-group has-feedback"
                        ng-class="{'has-error': demoForm.$submitted && demoForm.email.$invalid }">
                <label class="col-xs-2 control-label">邮箱:</label>
                <div class="col-xs-6">
                    <input name="email" type="email" class="form-control"
                        ng-model="user.email"
                        placeholder="请输入邮箱"/>
                    <span class="help-block">
                        [手机号]及之后 是 首次提交后&&不合法 显示错误 <br/>
                        demoForm.$submitted  && email.mobile.$invalid<br/>
                        不做必填要求 
                    </span>
                </div>
                <div class="col-xs-4 help-block error-message" ng-messages="demoForm.email.$error" ng-show="demoForm.$submitted && demoForm.email.$invalid">
                    <span ng-message="email">格式不对</span>
                </div>
            </div>
    
            <div class="hr-line-dashed"></div>

            <div class="form-group">
                <div class="col-xs-8 col-xs-offset-2">
                    <button type="submit"  class="btn btn-info" ng-disabled="demoForm.$submitting" ng-switch="demoForm.$submitting">
                    <span ng-switch-default>提交</span>
                    <span ng-switch-when="true">提交中...</span>
                    </button>
                </div>
            </div>
    

            </form>
        </div>
    </div>
    </div>
</div>