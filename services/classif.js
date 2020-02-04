const clothes = require('./clothes');

const temperature = {
    "freezing" : {
        "start" : -100,
        "end" : 0
    },
    "cold" : {
        "start" : 1,
        "end" : 5
    },
    "cool" : {
        "start" : 6,
        "end" : 10
    },
    "ideal" : {
        "start" : 11,
        "end" : 20
    },
    "warm" : {
        "start" : 20,
        "end" : 30
    },
    "hot" : {
        "start" : 30,
        "end" : 100
    }
}

const wind = {
    "normal" : {
        "min" : 1,
        "max" : 6
    },
    "windy" : {
        "min" : 8,
        "max" : 35
    }
};

/*-----------------------------------------------------------------*/

function getClassification(data)
{
    const tempClass = checkTemperature(data.main.temp);
    console.log(`Temp ${data.main.temp} belongs to class ${tempClass}`);
    const windClass = checkWind(data.wind.speed);
    console.log(`Wind ${data.wind.speed} belongs to class ${windClass}`);

    const aggObject = { "temp" : tempClass, "wind" : windClass};
    const url = clothes.getClothes(aggObject);

    return url;

}

/*-----------------------------------------------------------------*/

const checkTemperature = (temp) => 
{    
    for(var element in temperature)
    {
        if(temp <= temperature[element].end && temp >= temperature[element].start)
        {
                return element;
        }
    }
}

/*------------------------------------------------------------------*/

const checkWind = (wValue) => 
{    
    for(var element in wind)
    {
        if(wValue <= wind[element].max && wValue >= wind[element].min)
        {
                return element;
        }
    }
}

/*------------------------------------------------------------------*/

module.exports = {
    getClassification
};
