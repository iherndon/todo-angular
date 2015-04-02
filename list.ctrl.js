(function(){

angular
	.module('toDo')
	.controller("ListController", ListController);

	var tasks = ['walk', 'talk', 'call'];
	function ListController(){
		var vm = this;
		vm.items = tasks;
		vm.removeTask = function(item){
			tasks.splice(tasks.indexOf(item), 1);
		};
		vm.style = function(){
			return {'text-decoration': 'line-through'};
		};
	};

})();