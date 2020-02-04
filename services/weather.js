const apikey = '4947bb2d2494492695180777bf03ba9a';
const request = require('request');
const urlAddr = 'http://api.openweathermap.org/data/2.5/weather?q='
const urlUnitsKey = '&units=metric&appId=4947bb2d2494492695180777bf03ba9a'

//`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appId=${apikey}`


    const weather = (city, callback) => {
        let url = urlAddr + city + urlUnitsKey;
        console.log("Requesting : "+url);
        
        request(url, (err, response, body) =>{
            if(err)
            {
                callback("Unable to connect to the weather API", undefined)
            }
            else if(body.cod === 404)
            {
                callback("Unable to find location. Try another city", undefined)
            }
            else{
                let data = JSON.parse(body);
                callback(undefined,data)
            }
        });
    }

module.exports = weather