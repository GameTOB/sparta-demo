<div id="wrapper" ng-controller="app.indexCtrl">
	<nav class="navbar-default navbar-static-side">
		<div class="sidebar-collapse">
			<h2>菜单</h2>
			<div id="side-menu" ui-menu root-data="menuData"></div>
		</div>
	</nav>
	<div id="page-wrapper" class="gray-bg">
		<div class="row">
			<div class="col-lg-12">
				<div ng-view></div>
			</div>
		</div>
	</div>	
</div>