const express = require('express');
const router = express();
const weather = require('../services/weather');
const classif = require('../services/classif');
const clothes = require('../services/clothes');
const date = require('../services/date')
let cityy;
let unit = "metric"
let displayNodes = []

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
            displayNodes = classif.getClassification(data);  
            return res.render('index.pug', {
                city: cityy,                                
                imgSet : displayNodes,
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
            return res.render('index.pug', {
                city: cityy,                                
                imgSet : displayNodes,
                data: data,
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
                displayNodes = classif.getClassification(data);            
                res.cookie('selected city',city)
                return res.render('index.pug', {
                    city: cityy,                                
                imgSet : displayNodes,
                data: data,
                date: date.getTime(data),
                ds: date.getDateString(data)
                });
            }
            else
            {
                weather(cityy, unit, (error,data) => {
                    if(!error)
                    {
                        displayNodes = classif.getClassification(data);
                        console.log(displayNodes);
                        return res.render('index.pug', {
                            city: cityy,                                
                        imgSet : displayNodes,
                        data: data,
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