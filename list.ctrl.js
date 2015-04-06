(function(){

angular
	.module('toDo')
	.controller("ListController", ListController);

	function ListController(ToDoFactory){
		var vm = this;
		vm.items = ToDoFactory.tasks;
		vm.removeTask = function(item){
			vm.items.splice(vm.items.indexOf(item), 1);
		};

		vm.checkItemStatus = function(item){
			if(item.complete) {
				return {'text-decoration': 'line-through'};
			} else {
				return {};
			}
		};
	};

})();