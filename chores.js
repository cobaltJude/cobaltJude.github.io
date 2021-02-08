$(document).ready(function(){

    function loop() {
        $("img").css("transform", "rotateY(180deg)",);
        $("img").css("transform", "rotateY(1deg)",loop);
    }
    
    loop();
    
});

