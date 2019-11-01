const path = require('path');
const express = require('express');
const app = express();
const geo = require('./utils/geoCode');
const forCasting = require('./utils/forecast');

const publicDirPath = path.join(__dirname,'../public');

app.set('view engine', 'hbs');

// app.use(express.static(publicDirPath));

app.get('',(req, res) => {
    res.render('index', {
        title: 'Maa'
    });
})

app.get('/wether', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    geo.geoCode(req.query.address, (error, { latitude, longitude, loc}) => {
        if (error){
            return console.log(error);
        }
        
        forCasting.foreCast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }

            res.send({
                loc: loc,
                forCasting: forecastData
            })
            
        })
    }) 

    
    
})






app.listen(3000, () => {
    console.log('PORT 30000');
    
})