const moment = require('moment');

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function getTime(data)
{
    var arr = []
    if(data.timezone < 0)
    {
        let hrsDiff = Math.floor(Math.abs(data.timezone/3600))
        let minsDiff = Math.abs((data.timezone/60)%60)
        var d = moment.unix(data.dt).utc().subtract(hrsDiff,'h').add(minsDiff,'m')
        //console.log("final date is hrs:",d.hour()," mins:",d.minute())
        return d.hour()+":"+d.minute()
    }
    else {
        let hrsDiff = Math.floor(Math.abs(data.timezone/3600))
        let minsDiff = Math.abs((data.timezone/60)%60)
        var d = moment.unix(data.dt).utc().subtract(hrsDiff,'h').add(minsDiff,'m')
        return d.hour()+":"+d.minute()
    }
}

function getDateString(data){
    
    if(data.timezone < 0)
    {
        let hrsDiff = Math.floor(Math.abs(data.timezone/3600))
        let minsDiff = Math.abs((data.timezone/60)%60)
        var d = moment.unix(data.dt).utc().subtract(hrsDiff,'h').add(minsDiff,'m')
        return days[d.day()] + ", " + d.date() + " " + months[d.month()]
    }
    else {
        let hrsDiff = Math.floor(Math.abs(data.timezone/3600))
        let minsDiff = Math.abs((data.timezone/60)%60)
        var d = moment.unix(data.dt).utc().subtract(hrsDiff,'h').add(minsDiff,'m')
        return days[d.day()] + ", " + d.date() + " " + months[d.month()]
    }

}


module.exports = {
    getTime,
    getDateString
};
