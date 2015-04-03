(function(){

angular
	.module('toDo')
	.controller("FormController", FormController);

	function FormController(ToDoFactory){
		var vm = this;
		this.addTask = function(item){
			ToDoFactory.tasks.push(item);
			vm.newItem = '';
		};
	}


})();