	(function(){

var app = angular.module('toDo', ['ngRoute']);
	app.controller('AboutController', function(){
		this.title = 'About ToDo List App';

	});
	app.factory('ToDoFactory', function(){
		var factory = {};
		factory.tasks = [{body: 'reading', complete: false},{body: 'writing', complete: false}, {body: 'math', complete: false}];
		return factory;
	});
	app.config(function($routeProvider){
		$routeProvider

		.when('/', {
			templateUrl: 'views/todolist.html'
		})

		.when('/login', {
			templateUrl: 'views/login.html'
		})

		.when('/about', {
			templateUrl: 'views/about.html'
		})

		.when('/completed', {
			templateUrl: 'views/completed.html'
		})

		.otherwise({redirectTo: '/'})

	});


})();