$(document).ready(function() {

    var k = 2;
    var gridSize = '';

    for (var j = 0; j < k; j++) {
        gridSize += '100px ';
    }

    console.log(gridSize);
    var pad = $('.pad');
    pad.css({ 'grid-template-columns': gridSize});

    for (var i = 0; i < k ** 2; i++) {

        $('.pad').append('<div class="pad-pixel"></div>');

        // $(".pad-pixel").css({'display': 'inline-block'});
    }
});