(function() {
	
	function dataListController() {
		
		this.lists = JSON.parse(localStorage.getItem('lists')) || [];
		this.index = parseInt(localStorage.getItem('index')) || 0;
		
		this.addToList = function() {
			this.index += 1;
			this.item = {key: this.index, data: this.dataText, del: false};
			this.lists.push(this.item);
			localStorage.setItem('lists', JSON.stringify(this.lists));
			localStorage.setItem('index', this.index);
			this.dataText = '';
		};
		
    this.removeData = function () {
        this.lists = this.lists.filter(function(item) {
					return !item.del;
        });
				localStorage.setItem('lists', JSON.stringify(this.lists));
    };
	};
	
	angular
		.module ('dataApp', [])
		.controller ('dataListController', dataListController);
})();