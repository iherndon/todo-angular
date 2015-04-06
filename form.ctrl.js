(function(){

angular
	.module('toDo')
	.controller("FormController", FormController);

	function FormController(ToDoFactory){
		var vm = this;
		vm.newItem = {
			body: '',
			complete: false
		}
		this.addTask = function(item){
			ToDoFactory.tasks.push(item);
			vm.newItem = {
				body: '',
				complete: false
			};
		};
	}


})();