
// let unix_timestamp = 1581909994
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp * 1000);

// // Hours part from the timestamp
// var hours = date.getHours();

// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();

// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);


/*-----------------------------------------------------------------*/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function getTime(unixtime)
{   
    var date = new Date(unixtime * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) 
    return formattedTime
}

function getDateString(unixtime){
    //Mon, 11 January
    var date = new Date(unixtime * 1000)
    var day = days[date.getDay()]
    var month = months[date.getMonth()]
    var d = date.getDate()

    var dateString = day+", "+d+" "+month
    return dateString
}


module.exports = {
    getTime,
    getDateString
};
