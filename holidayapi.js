var xhr = new XMLHttpRequest();
xhr.open("GET", "https://holidayapi.com/v1/holidays?country=US&year=2017&key=85110baa-372b-4698-975c-b07394fb7a53", false);
xhr.send();

response = JSON.parse(xhr.response);

for (var date in response.holidays) {
  for(var i = 0; i < response.holidays[date].length; i++){
    console.log(response.holidays[date][i].name);
     console.log(response.holidays[date][i].date);
  }
  
  
}

