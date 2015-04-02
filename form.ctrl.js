(function(){

angular
	.module('toDo')
	.controller("FormController", FormController);

	function FormController(){
		var vm = this;
		this.addTask = function(item){
			tasks.push(item);
			vm.newItem = '';
		};
	}


})();