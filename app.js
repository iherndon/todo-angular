(function(){

var app = angular.module('toDo', ['ngRoute']);
	app.controller('AboutController', function(){
		this.title = 'About ToDo List App';

	});
	app.factory('ToDoFactory', function(){
		var factory = {};
		factory.tasks = ['walk', 'talk', 'call'];
		return factory;
	});
	app.config(function($routeProvider){
		$routeProvider

		.when('/', {
			templateUrl: 'todolist.html'
		})

		.when('/login', {
			templateUrl: 'login.html'
		})

		.when('/about', {
			templateUrl: 'about.html'
		})

		.otherwise({redirectTo: '/'})

	});


})();