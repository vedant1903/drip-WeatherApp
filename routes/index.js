const express = require('express');
const router = express();
const weather = require('../services/weather');
const classif = require('../services/classif');
const clothes = require('../services/clothes');
const date = require('../services/date')
let cityy;
let unit = "metric"

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
    console.log(`Calling getweather for ${cityy} and unit is ${unit}`);
    unit = "metric"
    weather(cityy, unit, (error,data) => {
        if(!error)
        {
            const displayNodes = classif.getClassification(data);  
            return res.render('index.pug', {
                weatherTitle: cityy,                
                unit: "C",
                imgUrlSet : displayNodes,
                data: data,
                date: date.getTime(data),
                ds: date.getDateString(data)
            });
        }        
    })
})

router.get('/imperial', (req,res) => {
    unit = "imperial"
    weather(cityy, unit, (error,data) => {
        if(!error)
        {
            const displayNodes = classif.getClassification(data);  
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
                unit: "F",
                data: data,
                //date: date.getTime(data.dt),
                date: date.getTime(data),
                ds: date.getDateString(data)
            });
        }
    })
})

router.post('/', (req, res) => {

    let city = req.body.city;
    if(city)
    {
        unit = "metric"
        weather(city, unit, (error,data) => {
            if(data.cod===200)
            {
                const displayNodes = classif.getClassification(data);            
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
                    data: data,
                    //date: date.getTime(data.dt),
                    date: date.getTime(data),
                    ds: date.getDateString(data)
                });
            }
            else
            {
                weather(cityy, unit, (error,data) => {
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
                            data: data, 
                            //date: date.getTime(data.dt),
                            date: date.getTime(data),
                            ds: date.getDateString(data),
                            error: true
                        });
                    }        
                })                
            }        
        })               
    }
})

module.exports = router;