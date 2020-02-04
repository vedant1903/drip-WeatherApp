const express = require('express');
const router = express();
const weather = require('../services/weather');
const classif = require('../services/classif');
const clothes = require('../services/clothes');
let cityy;

router.use((req, res, next) => {
    if(req.cookies['selected city'])
    {
        cityy = req.cookies['selected city'];
    }
    else
    {
        cityy = "Boston";
    }
    return next();
})


router.get('/', (req, res) => {
    console.log(`Calling getweather for ${cityy}`);
    
    weather(cityy, (error,data) => {
        if(!error)
        {
            const displayNodes = classif.getClassification(data);
            console.log(displayNodes);
            return res.render('index.pug', {
                weatherTitle: `Weather for ${cityy}`,
                temperature : data.main.temp,
                pressure : data.main.pressure,
                humidity : data.main.humidity,
                wind : data.wind.speed,
                country : data.sys.country,
                imgUrl : displayNodes
            });
        }        
    })
})


router.post('/', (req, res) => {

    let city = req.body.city;
    if(city)
    {

        weather(city, (error,data) => {
            if(!error)
            {
                const displayNodes = classif.getClassification(data);
                console.log(displayNodes);
                res.cookie('selected city',city)
                return res.render('index.pug', {
                    weatherTitle: `Weather for ${city}`,
                    temperature : data.main.temp,
                    pressure : data.main.pressure,
                    humidity : data.main.humidity,
                    wind : data.wind.speed,
                    country : data.sys.country,
                    imgUrlSet : displayNodes
                });
            }        
        })               
    }
})

module.exports = router;