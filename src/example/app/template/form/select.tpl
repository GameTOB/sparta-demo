<h1>module/ui/select 使用范例</h1>

<div class="row">
<div class="col-xs-12">
		<div class="ibox">
			<div class="ibox-content">
				<pre>{{userDate.inputWord}}</pre>
				<ui-select 
				ng-model="userDate.inputWord"
				search-enabled="true"
	            style="width: 500px;">
			    <ui-select-match placeholder="输入">{{$select.selected}}</ui-select-match>
			    <ui-select-choices repeat="input in ['abc','def','ghi','jkl','mno','pqr','stu','vwx','yz']    | filter: $select.search track by $index">
			      <div ng-bind-html="'<i>'+input+'</i>' | highlight: $select.search"></div>
			    </ui-select-choices>
			  </ui-select>
			</div>
		</div>
	    <div class="ibox">
        <div class="ibox-title"><h3 class="panel-title">地址查询案例</h3></div>
        <div class="ibox-content">
        	ng-model一定要放置个引用 如 userDate.addressInfo 
        	<pre>{{userDate.addressInfo}}</pre>
        	<h2 ng-if="userDate.addressInfo.formatted_address && !userDate.addressInfo.place_id">没有有效地址 结果无效</h2>
			<ui-select 
			ng-model="userDate.addressInfo"
            style="width: 300px;">
		    <ui-select-match placeholder="输入地址">{{$select.selected.formatted_address}}</ui-select-match>
		    <ui-select-choices repeat="address in addresses track by $index"
		             refresh="refreshAddresses($select.search)"
		             refresh-delay="0">
		      <div ng-bind-html="address.formatted_address | highlight: $select.search"></div>
		    </ui-select-choices>
		  </ui-select>
        </div>
        <h3>相关文档</h3>
		<ul>
			<li><a href="https://github.com/angular-ui/ui-select/wiki/ui-select" target="_blank">ui-select</a></li>
			<li><a href="https://github.com/angular-ui/ui-select/wiki/ui-select-match" target="_blank">ui-select-match</a></li>
			<li><a href="https://github.com/angular-ui/ui-select/wiki/ui-select-choices" target="_blank">ui-select-choices</a></li>

		</ul>
</div>
</div>