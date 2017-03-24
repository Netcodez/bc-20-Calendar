function holiday(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://holidayapi.com/v1/holidays?key=be89e29f-3ef2-431a-aaa8-243207439ff3&country=US&year=2016", false);
xhr.send();

response = JSON.parse(xhr.response);
var arr = [];
for (var date in response.holidays) {
  var arr2 = [];
  for(var i = 0; i < response.holidays[date].length; i++){
    arr2.push(response.holidays[date][i].date.substr(5));
    arr2.push(response.holidays[date][i].name);
    arr.push(arr2);
  }

}
return (arr.join(' '));
}
window.onload = function(){
document.getElementById('holiday').innerHTML = holiday();
}
