var HolidayAPI = require('node-holidayapi');
var hapi = new HolidayAPI('85110baa-372b-4698-975c-b07394fb7a53').v1;

var parameters = {
  // Required
  country: 'US',
  year:    2017,
  // Optional
  // month:    7,
  // day:      4,
  // previous: true,
  // upcoming: true,
  // public:   true,
  // pretty:   true,
};

hapi.holidays(parameters, function (err, data) {
   if (!err){
            console.log(data.status)
            console.log(data.holidays)
         // var data = d
          //var name = data.name;
         // var date = data.date;
         // var observed = data.observed;

         // console.log('The holiday is called ' + name)
         // console.log('The date  is' + date)
         // console.log('It is observed on ' + observed )
   }
});