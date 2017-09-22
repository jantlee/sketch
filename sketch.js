$(document).ready(function() {
    var inputNum = 50;
    var cellSize = 500 / inputNum;
    var gridCol = '';

    function setGridColumns() {
        for (var i = 0; i < inputNum; i++) {
            gridCol += cellSize + 'px ';
        }
        $('.pad').css('grid-template-columns', gridCol);
    }

    function setGridCells() {
        for (var i = 0; i < inputNum ** 2; i++) {
            $('.pad').append('<div class="pad-pixel"></div>');
        }
    }

    function draw() {
        $('.pad-pixel').on('mouseenter', function() {
            $(this).css('background-color', 'black');
        });
    }

    function clear() {

    }

    setGridColumns();
    setGridCells();
    draw()

    $('#clear').on('click', function() {
        $('.pad-pixel').css('background-color', 'white');
    });
});