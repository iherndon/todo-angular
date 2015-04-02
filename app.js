(function(){

var app = angular.module('toDo', ['ngRoute']);

	app.controller('ListController', function(){
		this.items = tasks;
		this.removeTask = function(item){
			tasks.splice(tasks.indexOf(item), 1);
		};
		this.style = function(){
			return {'text-decoration': 'line-through'};
		};
	});

	app.controller('FormController', function(){
		this.addTask = function(item){
			tasks.push(item);
			this.newItem = '';	
		};
	});

	app.controller('AboutController', function(){
		this.title = 'About ToDo List App';

	});
	var tasks = ['walk', 'talk', 'call'];
	app.config(function($routeProvider){
		$routeProvider

		.when('/', {
			templateUrl: 'todolist.html'
		})

		.when('/about', {
			templateUrl: 'about.html'
		})

		.otherwise({redirectTo: '/'})

	});


})();