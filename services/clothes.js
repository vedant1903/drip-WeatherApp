// const parka = {
//     "url" : "parka.svg",
//     "freezing" : true,
//     "cold" : false,
//     "cool" : false,
//     "ideal" : false,
//     "warm" : false,
//     "hot" : false
// };

// const tshirt = {
//     "url" : "tshirt.svg",
//     "freezing" : true,
//     "cold" : true,
//     "cool" : true,
//     "ideal" : true,
//     "warm" : true,
//     "hot" : false
// };

const tempBasedItems = {
    "parka" : {
        "url" : "parka.svg",
        "freezing" : true,
        "cold" : false,
        "cool" : false,
        "ideal" : false,
        "warm" : false,
        "hot" : false
    },
    "sweater" : {
        "url" : "sweater.svg",
        "freezing" : true,
        "cold" : false,
        "cool" : false,
        "ideal" : false,
        "warm" : false,
        "hot" : false
    },
    "winterjacket" : {
        "url" : "wjacket.svg",
        "freezing" : false,
        "cold" : true,
        "cool" : true,
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
    },
    "beanie" : {
        "url" : "beanie.svg",
        "freezing" : true,
        "cold" : true,
        "cool" : false,
        "ideal" : false,
        "warm" : false,
        "hot" : false
    },
    "jeans" : {
        "url" : "jeans.svg",
        "freezing" : true,
        "cold" : true,
        "cool" : true,
        "ideal" : true,
        "warm" : false,
        "hot" : false
    },
    "gloves" : {
        "url" : "gloves.svg",
        "freezing" : true,
        "cold" : true,
        "cool" : false,
        "ideal" : false,
        "warm" : false,
        "hot" : false
    }
}

const rainItems = {
    "waterproofShoes" : {
        "url" : "waterproofshoes.svg",
        "Thunderstorm" : true,
        "Drizzle" : true,
        "Rain" : true,
        "Snow" : false
    },
    "umbrella" : {
        "url" : "umbrella.svg",
        "Thunderstorm" : true,
        "Drizzle" : true,
        "Rain" : true,
        "Snow" : true
    },
    "winterboots" : {
        "url" : "winterboots.svg",
        "Snow" : true
    }
}

function getClothes(wClass) {

    let itemsUrl = [];
    
    for (let item in tempBasedItems)
    {
        if(tempBasedItems[item][wClass.temp])
        {
            itemsUrl.push(tempBasedItems[item]["url"]);
        }    
    }

    for (let item in rainItems)
    {
        
        if(rainItems[item][wClass.summary])
        {
            console.log(`inside for  ${item}`);
            itemsUrl.push(rainItems[item]["url"]);
        }    
    }

    return itemsUrl;
}

module.exports = {
    getClothes
};