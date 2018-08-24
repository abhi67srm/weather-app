    const request = require('request');

        var geocodeAddress = (address, callback)=>{
        var encodeString = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeString}`,
            json: true
        },(error, response, body)=>{

        if(error){
            callback("Unable to connect to google server");

        }
        else if(body.status === 'ZERO_RESULTS'){
            callback("Unable to find that address");
        }

        else if(body.status === 'OK'){
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng,
            });
        }
        else{
            callback("check url");
        }
        })

    }





    module.exports = {
        geocodeAddress
    }