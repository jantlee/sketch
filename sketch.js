$(document).ready(function() {
	var inputNum = 50;
	var cellSize = 500/inputNum;
	var gridCol = '';

	function setGridColumns() {
		for (var i = 0; i < inputNum; i++) {
			gridCol += cellSize+'px ';
		}
		$('.pad').css('grid-template-columns',gridCol);
	}

	function setGridCells() {
		for (var i = 0; i < inputNum**2; i++) {
			$('.pad').append('<div class="pad-pixel"></div>');
		}
	}

	setGridColumns();
	setGridCells();
});