$(document).ready(function(){
    $("#moon").mouseenter(function(){
        $("#one").attr("src", "werewolf.png");
        $("h4").text("OH GOD HE'S A WEREWOLF!");
        $("#talktext").text("Arghh!! I'm Jerrywolf!");
    });
    $("#moon").mouseleave(function(){
        $("#one").attr("src", "notawerewolf.png");
        $("#talktext").text("Heya! I'm Jerry.");
});
});

