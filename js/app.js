(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular.module("todoApp",[]).controller("toduController",["$scope",function ($scope) {//创建模块和控制器
		$scope.index=0//设置id
		//功能1 任务的展示
		$scope.datas=[//模拟表单数据
			{id:$scope.index++,name:"吃饭",completed:true},
			{id:$scope.index++,name:"吃饭",completed:true},
			{id:$scope.index++,name:"吃饭",completed:true},
			{id:$scope.index++,name:"吃饭",completed:true},
			{id:$scope.index++,name:"吃饭",completed:true}
		]
		//功能2  添加任务
		$scope.newName="";//创建空字符串获取input的键入值
		$scope.add=function () {//当表单提交时调用方法
			if(!$scope.newName){//当表单内容为空时返回
				return
			}
			$scope.datas.push({//把input的键入值添加到$scope.datas中
				id:$scope.index++,
				name:$scope.newName,
				completed:false
			})
			$scope.newName="";//提交时清空表单内容
		}
		//功能3 删除任务
		$scope.remove=function (id) {
			for(var i=0;i<$scope.datas.length;i++){//遍历任务数据
				var data=$scope.datas[i]
				if(data.id==id){//当数据的id等于传入的id时 删除当前这条数据
					$scope.datas.splice(i,1);
					return;
				}
			}
		}
		//功能4 修改任务
		$scope.editId=-1
		$scope.edit=function (id) {
			$scope.editId=id;//让editId等于传入也就是中的id
		}
		$scope.save=function(){//改变文本编辑状态
			$scope.editId=-1

		}
		//功能5 设置当前任务的完成状态
		//功能6 设置所有任务的选中
		$scope.isChecked=false;
		$scope.checkedAll=function () {
			for(var i=0;i<$scope.datas.length;i++){
				$scope.datas[i].completed=$scope.isChecked
			}
		}
		//显示未完成的任务数
		$scope.getActive=function () {
			var count=0;
			for(var i=0;i<$scope.datas.length;i++){
				if(!$scope.datas[i].completed){
					count++;
				}
			}
			return count;
		}
		//删除已完成的任务
		$scope.clear=function () {
			for(var i=$scope.datas.length-1;i>0;i--){
				if($scope.datas[i].completed){
					$scope.datas[i].splice(i,1)
				}
			}
		}
	}])

})(angular);
