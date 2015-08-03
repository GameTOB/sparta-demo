<h1>module/ui/datepicker 使用范例</h1>
<div class="row">
<div class="col-xs-12">
	<form novalidate class="form-horizontal" name="demoForm" ng-submit="save(demoForm)">
	<h5>以下案例不管怎么搞 都是对$scope.customDate 的控制</h2>
	<div class="ibox">
		<div class="ibox-title">
            Inline
        </div>
        <div class="ibox-content">
        	<p>{{customDate | date:"y年M月d日 HH:mm"}}</p>
			<div ui-date-picker ng-model="customDate" view="date"></div>
		</div>
	</div>
	<div class="ibox">
		<div class="ibox-title">
            选取到日，只能选月日 , input 加上readonly属性 变只读
        </div>
        <div class="ibox-content">
			<input type="text" 
			ui-date-time 
			ng-model="customDate"
			view="date" 
			min-view="date"
			max-view="month"
			format="yyyy-MM-dd" 
			readonly
			>
		</div>
	</div>
	<div class="ibox">
		<div class="ibox-title">
            选取到分钟 且设置日期范围 : [ {{minDate | date:"yyyy-MM-dd"}} , {{maxDate | date:"yyyy-MM-dd"}} ] , 还可以直接更改文本框内容 , 加入可验证环节
        </div>
        <div class="ibox-content">
        	<div class="form-group has-feedback" ng-class="{'has-error': demoForm.pickdate1.$invalid }">
        		<div class="col-xs-3">
					<input class="form-control" type="text" name="pickdate1" 
					ui-date-time 
					ng-model="customDate" 
					view="date"
					min-date="minDate" 
					max-date="maxDate"
					step="30"
					required
					>
				</div>
				<div class="col-xs-5 help-block" ng-messages="demoForm.pickdate1.$error" ng-show="demoForm.pickdate1.$invalid">
					<span ng-message="required">不能为空</span>
                    <span ng-message="date">输入日期格式不对</span>
                    <span ng-message="min">日期最小为 {{minDate | date:"yyyy-MM-dd"}}</span>
                    <span ng-message="max">日期最大为 {{maxDate | date:"yyyy-MM-dd"}}</span>
                </div>
			</div>
		</div>
	</div>
	<div class="ibox">
		<div class="ibox-title">
            设定特殊条件：只允许选中10:00-20:00
        </div>
        <div class="ibox-content">
			<div class="ibox-content">
			<input type="text" 
			ui-date-time 
			ng-model="customDate"
			date-disabled="disableDate(date,view)"
			>
		</div>
		</div>
	</div>
	<div class="ibox">
		<div class="ibox-title">
            选取一段时间 {{startDate | date:"yyyy-MM-dd"}} - {{endDate | date:"yyyy-MM-dd"}}
        </div>
        <div class="ibox-content">
			<div ui-date-range start="startDate" end="endDate"></div>
		</div>
	</div>
	</form>
	<h5>属性参数说明:</h5>
	<pre>{
		step:"只有到分钟级别才有效 默认:5",
		view:"选择初始化视图: year,month,date,hours,minutes 默认:date"
		format:"数据显示的格式化 默认:yyyy-MM-dd HH:mm [因JS引擎Date实现的不一致 必须存在年份的yyyy,yy,y 否则view->model解回来可能是2001(v8)]",
		//http://stackoverflow.com/questions/6804360/javascript-new-date-missing-year
		//当然可以引入更强悍包容的DateParse

		date-disabled: "function(date , view) 通用日期禁用判断仅用于[ui-date-picker]的UI及交互可用性 但不作为[ng-model][ui-date-time]的validator",
		min-date :"最小可选日期 作为[ng-model][ui-date-time]的validator.min",
		max-date :"最大可选日期 作为[ng-model][ui-date-time]的validator.max"
		
		min-view:"最小视图 默认:minutes",
		max-view:"最大视图 默认:year",

		append-to-body : "是否在body中插入浮层 true/false , 默认为:false"
	}</pre>
</div>
</div>