window.onload=init;

function init(){
    var map = document.getElementById('map');
    map.onmousemove = showAnswer;
}

function showAnswer(event){
    var map = document.getElementById('cook');
    var x = event.clientX;
    var y = event.clientY;
    map.innerHTML = 'Координаты на карте:' + x+" px"+ ',' + y+" px";
    

}

// function showAnswer(event){
//     var map = document.getElementById('cook');
//     var x = event.screenX;
//     var y = event.screenY;
//     map.innerHTML = 'Координаты на карте:' + x+" px"+ ',' + y+" px";
    

// }

// function showAnswer(event){
//     var map = document.getElementById('cook');
//     var x = event.pageX;
//     var y = event.pageY;
//     map.innerHTML = 'Координаты на карте:' + x+" px"+ ',' + y+" px";
    

// }