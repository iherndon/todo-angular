(function(){

angular
	.module('toDo')
	.controller("ListController", ListController);

	// var tasks = ['walk', 'talk', 'call'];
	function ListController(ToDoFactory){
		var vm = this;
		vm.items = ToDoFactory.tasks;
		vm.removeTask = function(item){
			vm.items.splice(vm.items.indexOf(item), 1);
		};
		vm.style = function(){
			return {'text-decoration': 'line-through'};
		};
	};

})();