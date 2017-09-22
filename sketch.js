$(document).ready(function() {
    var inputNum = 16; //Eventually allow user-input via prompt
    var cellSize = $('.container').height() / inputNum;
    var gridCol;
    var bubbleMode;
    var gridMode;

    function setGridColumns() {
        gridCol = '';
        for (var i = 0; i < inputNum; i++) {
            gridCol += cellSize + 'px ';
        }
        $('.pad').css('grid-template-columns', gridCol);
    }

    function setGridCells() {
        for (var i = 0; i < inputNum ** 2; i++) {
            $('.pad').append('<div class="pad-pixel"></div>');
        }

        if (bubbleMode == true) {
            activateBubble();
        }
    }

    function draw() {
        $('.pad-pixel').on('mouseenter', function() {
            $(this).css('background-color', 'black');
        });
    }

    function promptForSize() {
        var size = prompt('What size would you like the grid to be?');
        inputNum = size;
        cellSize = $('.container').height() / inputNum;

    }

    function activateGrid() {
        bubbleMode = false;
        gridMode = true;
        $('.pad-pixel').css('border-radius', '0%');
    }

    function activateBubble() {
        bubbleMode = true;
        gridMode = false;
        $('.pad-pixel').css('border-radius', '100%');
    }

    function resetGrid() {
        $('.pad').empty();
        setGridColumns();
        setGridCells();
        draw();
    }

    setGridColumns();
    setGridCells();
    draw();

    $('#change-size').on('click', function() {
        promptForSize();
        resetGrid();
    });

    $('#reset').on('click', function() {
        resetGrid();
    });

    $('#grid').on('click', activateGrid);
    $('#bubble').on('click', activateBubble);
});