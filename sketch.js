$(document).ready(function() {
    var inputNum = 16; //Init at 16. Can be changed by user.
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

    // function draw() {
    //     $('.pad-pixel').on('mouseenter', function() {
    //         $(this).css('background-color', 'black');
    //     });
    // }

    function draw() {
        $('.pad-pixel').on('mouseenter', function() {
            /*is this the first time you've entered this cell?
            Does it have return cell class?*/
            if ($(this).hasClass('return-cell')) {//if not first time
                // console.log($(this).css('opacity'));
                var opacity = $(this).css('background-color');
                var rgbaSplit = opacity.split(',');
                var rgbAlpha = parseFloat(parseFloat(rgbaSplit[3].slice(0, -1)).toFixed(1));
                rgbAlpha+=.2;
                console.log('alpha: '+ rgbAlpha);                
                // console.log(rgbaSplit);
                rgbaSplit[3] = " "+rgbAlpha+")";
                $(this).css('background-color', rgbaSplit.join());
                //toFixed for rounding
                // opacity += .1;
                // console.log('new opacity: '+opacity);
                // $(this).css('opacity', opacity);
                //set bg-color to black and add return cell class
            }  else { //if first time
                $(this).css('background-color', 'rgba(0,0,0,.1)');
                $(this).addClass('return-cell');
                console.log("new cell")
                //increment return cell opacity by .1
            }
        });
    }

    function promptForSize() {
        var size = prompt('What size would you like the grid to be?', 'Enter a number between 0 and 100');
        if (size > 100 || size <= 0) {
            alert('Invalid input');
            promptForSize();
        }

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