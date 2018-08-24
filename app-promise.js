const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
.options({
    address:{
       demand: true,
       alias: 'a',
       describe: 'Address to fetch weather for',
       string: true 
    }
})
    .help()
    .alias('help','h')
    .argv;

    var encodeString = encodeURIComponent(argv.address);
    var geoCodeUrl= `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeString}`;

    axios.get(geoCodeUrl).then((response)=>{
         if(response.data.status === 'ZERO_RESULTS'){
             throw new Error('Unable to find that aaddress.');
         }
         var latitude = response.data.results[0].geometry.location.lat;
         var longitude = response.data.results[0].geometry.location.lng;
       
         var forecastUrl = `https://api.darksky.net/forecast/3abfc1adb748898cd88a9159f04ddadd/${latitude},${longitude}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(forecastUrl);
    }).then((response)=>{
       var tempreature = response.data.currently.temperature;
       var apparentTempreature = response.data.currently.apparentTemperature;
       console.log(`it's currently ${tempreature}. it feels like ${apparentTempreature}` )

    }).catch((e)=>{
          console.log(e); 
        
       
    });

