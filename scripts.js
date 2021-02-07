
$(document).ready(function(){
    $("#bullet").hide();
    $("#explosion").hide();
        $("#gun").click(function(){
            $("#bullet").show();
            $("#bullet").animate({right: '600px'});
          }); 
          $("#gun").click(function(){
              $("#explosion").show();
  });
});

