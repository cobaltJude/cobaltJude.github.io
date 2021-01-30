$.getJson("Standard.json")
var mydata = JSON.parse(data);
window.alert(mydata[0].baseSetSize);