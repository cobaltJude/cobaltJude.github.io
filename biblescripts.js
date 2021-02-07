$(document).ready(function(){
    
    function loop() {
        $('.odd').animate({height:'500px'},60);
        $('.even').animate({height:'600px'},60);
        $('.odd').animate({height:'600px'},60,loop);
        $('.even').animate({height:'500px'},60,loop);
    }
    loop();


});

