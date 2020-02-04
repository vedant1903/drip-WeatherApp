const parka = {
    "url" : "parka.svg",
    "freezing" : true,
    "cold" : false,
    "cool" : false,
    "ideal" : false,
    "warm" : false,
    "hot" : false
};

const tshirt = {
    "url" : "tshirt.svg",
    "freezing" : true,
    "cold" : true,
    "cool" : true,
    "ideal" : true,
    "warm" : true,
    "hot" : false
};

const itemsList = {
    "parka" : {
        "url" : "parka.svg",
        "freezing" : true,
        "cold" : false,
        "cool" : false,
        "ideal" : false,
        "warm" : false,
        "hot" : false
    },
    "tshirt" : {
        "url" : "tshirt.svg",
        "freezing" : true,
        "cold" : true,
        "cool" : true,
        "ideal" : true,
        "warm" : true,
        "hot" : false
    }
}

var itemsUrl = [];

function getClothes(wClass) {

    for (var item in itemsList)
    {
        if(itemsList[item][wClass.temp])
        {
            itemsUrl.push(itemsList[item]["url"]);
        }    
    }

    // if(parka[wClass.temp])
    // {
    //       itemsUrl.push(parka.url);
    // }
    return itemsUrl;
}

module.exports = {
    getClothes
};