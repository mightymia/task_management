var task_listModule = angular.module('task_list', []);

//--------- Task Factory ---------//
	task_listModule.factory('taskFactory', function(){
		var tasks = [];
		var factory = {};

		factory.addTask = function(info){
			tasks.push({
				name: info.name,
				priority: info.priority,
				deadline: info.deadline,
				created: Date.now()
			})
		}

		factory.getTasks = function(){
			return tasks;
		}

		factory.removeTask = function(task){
			for (var i = 0; i < tasks.length; i++) {
				if(tasks[i] == task){
					tasks.splice(i, 1);
				}
			};
		}
		return factory;
	});


//----------Task Controller ----------//

	task_listModule.controller('tasksController', function($scope, taskFactory){
		$scope.tasks = taskFactory.getTasks();
		taskFactory.getTasks(function(data){
			$scope.tasks = data;
		})

		$scope.addTask = function(){
			taskFactory.addTask($scope.newTask);
			$scope.newTask = {};
		}

		$scope.removeTask = function(task){
			taskFactory.removeTask(task);
		}
	});