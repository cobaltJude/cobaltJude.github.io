jQuery.getJson("https://mtgjson.com/api/v5/Standard.json", "MagicStats", "Success!");

$(document).ready(function() {
    var mydata = JSON.parse(data);
    alert(mydata[0].card)
})