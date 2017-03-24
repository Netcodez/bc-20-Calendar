function holiday(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://holidayapi.com/v1/holidays?country=US&year=2017&key=85110baa-372b-4698-975c-b07394fb7a53", false);
xhr.send();

response = JSON.parse(xhr.response);
var arr = [];
for (var date in response.holidays) {
  var arr2 = [];
  for(var i = 0; i < response.holidays[date].length; i++){
    arr2.push(response.holidays[date][i].date);
    arr2.push(response.holidays[date][i].name);
    arr.push(arr2);
  }
}
return (arr);
}

