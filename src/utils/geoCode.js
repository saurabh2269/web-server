const request = require('request');

const geoCode = (address, callback) => {
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2F1cmFiaHNpbmdodSIsImEiOiJjazJhcWJ1a2IzMmE3M2htbGJyMTVubnRjIn0.POTJ8vkpFPLzLq4cW1mwTg';

    request({url: geoURL, json: true}, (error, response) => {

        if (error){
            callback('Unable to connect', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unamble to find location', undefined);
        } else {
            callback(undefined, {
                 latitude: response.body.features[0].center[1],
                 longitude: response.body.features[0].center[0],
                 loc: response.body.features[0].place_name
            })
            
        }
    })
}

module.exports = {
    geoCode: geoCode
}