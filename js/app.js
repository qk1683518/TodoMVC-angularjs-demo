(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular.module("todoApp",["servicesApp"]).controller("toduController",["$scope","$location","Service",function ($scope,$location,Service) {//创建模块和控制器
		console.log(Service);
		//功能1 任务的展示
		$scope.datas=Service.get()
		//功能2  添加任务
		$scope.newName="";//创建空字符串获取input的键入值
		$scope.add=function () {//当表单提交时调用方法
			if(!$scope.newName){//当表单内容为空时返回
				return
			}
			//标记
			Service.add($scope.newName)
			$scope.newName="";//提交时清空表单内容
		}
		//功能3 删除任务
		$scope.remove=function (id) {
			Service.remove(id);
		}
		//功能4 修改任务
		$scope.editId=-1
		$scope.edit=function (id) {
			$scope.editId=id;//让editId等于传入也就是中的id
		}
		$scope.save=function(){//改变文本编辑状态
			$scope.editId=-1
			Service.save();

		}
		//功能5 设置当前任务的完成状态
		$scope.statusChange=function(){
			Service.save();
		}
		//功能6 设置所有任务的选中
		$scope.isChecked=false;
		$scope.checkedAll=function () {
			Service.checkedAll($scope.isChecked)
		}
		//功能7 显示未完成的任务数
		$scope.getActive=function () {
			var count=0;
			for(var i=0;i<$scope.datas.length;i++){
				if(!$scope.datas[i].completed){
					count++;
				}
			}
			return count;
		}
		//功能8 删除所有已完成的任务
		$scope.clear=function () {
			Service.clear();
		}

/*
		$scope.All=function () {
			$scope.isCompleted={}
		}
		$scope.Active=function () {
			$scope.isCompleted={
				completed : true
			}
		}
		$scope.Completed=function () {
			$scope.isCompleted={
				completed : false
			}
		}
*/
	//功能9 通过监视地址栏的锚点变化来对页面上的 任务进行操作
	 $scope.isCompleted={}
	$scope.loca=$location
	$scope.$watch('loca.url()',function(newVal,oldVal){
		switch(newVal){
			case '/active':
			$scope.isCompleted={completed:true}
			break;
			case '/completed':
			$scope.isCompleted={completed:false};
			break;
			default:
			$scope.isCompleted={}
		}
		})
	}])

})(angular);
