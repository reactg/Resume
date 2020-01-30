//ЗАпустить скрипт через неделю

function alertInfo(){
    alert("Заплати за сайт")
}

function checkTime(){
    var timeInSec =Math.round(Date.now()/1000);
    if (timeInSec>1568124817){   //Unix time - будущее время когда должен сработать код
        alertInfo();
    }
    console.log(timeInSec);
}

checkTime();