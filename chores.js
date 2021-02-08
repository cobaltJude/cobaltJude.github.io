$(document).ready(function(){


    $( "#draggable" ).draggable();
    $('#yosuke').mouseover(function(){
        $(this).addClass('flipped');
    }).mouseleave(function(){
        $(this).removeClass('flipped');
    });

});

