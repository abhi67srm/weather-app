const request = require('request');

var forecastUpdate = ( latitude, longitude, callback)=>{
  
    request({
        url:`https://api.darksky.net/forecast/3abfc1adb748898cd88a9159f04ddadd/${latitude},${longitude}`,
        json: true
    
    }, (error, response, body)=>{
        if(error){
            callback("Unable to connect to forecast.io server");
        } 
        else if(response.statusCode === 400){
            callback("Unable to fetch weather ");
        }
        else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
        else{
            console.log("Unable to fetch weather");
        }
    
    });

}
module.exports = {
    forecastUpdate
};

