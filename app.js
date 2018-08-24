var request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
   if(errorMessage){
       console.log(errorMessage);
   }
   else{
       console.log(results.address);
       forecast.forecastUpdate(JSON.parse(results.latitude), JSON.parse(results.longitude), (errorMessage, forecastUpdate)=>{
        if(errorMessage){
            console.log(errorMessage);
        }
        else{
            console.log(`it's currently ${forecastUpdate.temperature}. it feels like ${forecastUpdate.apparentTemperature}`);
        }
    });
    
       
   }
});



// 3abfc1adb748898cd88a9159f04ddadd

