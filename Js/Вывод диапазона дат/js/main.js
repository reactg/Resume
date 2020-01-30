//Работа с диапазоном дат
document.querySelector('button').onclick = function(){
    let startDate = document.querySelector('#start-Date').value;
    let endDate = document.querySelector('#end-Date').value;
    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);
    let out = document.querySelector('#out');
    for(let i = startDate; i<endDate; i=i+24*60*60*1000){
        out.innerHTML += new Date(i).toISOString().substr(0,10)+ '<br>';
    }
    console.log(startDate);
}