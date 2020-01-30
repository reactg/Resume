let weather = [
    {
        date: 1571358837000,
      temperature:{  
        night: -3,
        day: 7,
    },
    cloudines: 'Ясно',
    snow: false,
    rain:false,
    },
    {
        date: 1571418000000,
      temperature:{  
        night: 0,
        day: 3,
    },
    cloudines: 'Облачно',
    snow: false,
    rain:false,
    },
    {
        date: 1571508000000,
      temperature:{  
        night: 0,
        day: 1,
    },
    cloudines: 'Облачно',
    snow: false,
    rain:false,
    },

];

//получить текущее время

let d = new Date();
d.setHours(20,0,0,0)
let n = d.getTime();
console.log(n);
for (let i = 0; i<weather.length; i++){
    if (n == weather[i].date){
        //console.log(weather[i].date);
        document.querySelector('#odut').innerHTML = weather[i].temperature.day;
        
        let currentDate = weather[i].date;
        let nextDay = currentDate;

        for ( k = 1; k<4; k++){
            nextDay += 24 * 60 * 60 * 1000;
            if (weather[i + k] !== undefined && weather [i + k].date == nextDay){
                console.log('yes');
            }
            else{
                break;
            }
        }
        
        
        
        break;
    }
}
