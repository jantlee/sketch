$(document).ready(function() {
    var inputNum = 16; //Init at 16. Can be changed by user.
    var cellSize = $('.container').height() / inputNum;
    var gridCol;
    var bubbleMode;
    var gridMode;
    var monoMode;
    var rainbowMode;

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
            if ($(this).hasClass('return-cell')) { //if not first time
                var opacity = $(this).css('background-color');
                var rgbaSplit = opacity.split(',');
                var rgbAlpha = parseFloat(parseFloat(rgbaSplit[3].slice(0, -1)).toFixed(1));
                if (rgbAlpha < .9) {
                    rgbAlpha += .1;
                    if (rainbowMode == true) {
                        rgbaSplit[0] = "rgba(" + Math.floor(Math.random() * 255);
                        rgbaSplit[1] = Math.floor(Math.random() * 255);
                        rgbaSplit[2] = Math.floor(Math.random() * 255);
                    } else {
                        rgbaSplit[0] = "rgba(0";
                        rgbaSplit[1] = "0";
                        rgbaSplit[2] = "0";
                    }
                    rgbaSplit[3] = rgbAlpha + ")";
                    $(this).css('background-color', rgbaSplit.join(", "));
                    console.log(rgbaSplit.join(", "));

                } else {
                    // Stop the errors!!!
                }
            } else { //if first time
                if (rainbowMode == true) {
                    var rainbowSplit = [];
                    rainbowSplit[0] = "rgba(" + Math.floor(Math.random() * 255);
                    rainbowSplit[1] = Math.floor(Math.random() * 255);
                    rainbowSplit[2] = Math.floor(Math.random() * 255);
                    rainbowSplit[3] = '.1)';
                    console.log(rainbowSplit.join());
                    $(this).css('background-color', rainbowSplit.join());
                } else {
                    $(this).css('background-color', 'rgba(0,0,0,.1)');
                }
                $(this).addClass('return-cell');
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

    function activateMono() {
        rainbowMode = false;
        monoMode = true;
    }

    function activateRainbow() {
        monoMode = false;
        rainbowMode = true;
    }

    function activateGrid() {
        bubbleMode = false;
        gridMode = true;
        $('.pad-pixel').css('border-radius', '0%');
    }

    function activateBubble() {
        gridMode = false;
        bubbleMode = true;
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
    $('#rainbow').on('click', activateRainbow);
    $('#mono').on('click', activateMono);
});