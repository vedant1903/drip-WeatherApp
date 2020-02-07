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
                weatherTitle: cityy,
                desc: data.weather[0].description,
                temperature : data.main.temp,
                feelslike : data.main.feels_like,
                pressure : data.main.pressure,
                humidity : data.main.humidity,
                wind : data.wind.speed,
                country : data.sys.country,
                imgUrlSet : displayNodes,
                min: data.main.temp_min,
                max: data.main.temp_max,
                icon: data.weather[0].icon,
                unit: "C",
                data: data
            });
        }        
    })
})


router.post('/', (req, res) => {

    let city = req.body.city;
    if(city)
    {

        weather(city, (error,data) => {
            if(data.cod===200)
            {
                const displayNodes = classif.getClassification(data);
                console.log(displayNodes);
                res.cookie('selected city',city)
                return res.render('index.pug', {
                    weatherTitle: city,
                    desc: data.weather[0].description,
                    temperature : data.main.temp,
                    feelslike : data.main.feels_like,
                    pressure : data.main.pressure,
                    humidity : data.main.humidity,
                    wind : data.wind.speed,
                    country : data.sys.country,
                    imgUrlSet : displayNodes,
                    min: data.main.temp_min,
                    max: data.main.temp_max,
                    icon: data.weather[0].icon,
                    unit: "C",
                    data: data
                });
            }
            else 
            {
                res.send("Place not found");
            }        
        })               
    }
})

module.exports = router;