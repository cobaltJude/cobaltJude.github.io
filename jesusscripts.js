$(document).ready(function(){

    $('#jesus').click(function(){ 
        $('#jesus').fadeOut(1000);
        $('h1').after("<a href='hotsingles.html'>click me ;)</a>");
    });

    function loop() {
        $('#jesussays').animate({bottom:'100px'},750);
        $('#jesussays').animate({left:'15%'},750);
        $('#jesussays').animate({bottom:'500px'},750);
        $('#jesussays').animate({left:'65%'},750, loop);
    }

   
    loop();


});

