const request = require('request');


const foreCast = (lat,lon,callback) => {
    const url = 'https://api.darksky.net/forecast/ebad7acf020c9d4d8113c5ce8ead246c/'+encodeURI(lat)+','+encodeURI(lon)+'?lang=hi';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined);
        } else if (response.body.error) {
            callback('Unable to connect', undefined);
        } else {
            callback(undefined, response.body.currently.summary);
        }
    })
}

module.exports = {
    foreCast: foreCast
}




