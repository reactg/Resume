document.getElementById("myslide").onmousemove = function (event) {
    var x = event.offsetX;//относительно родителя
    console.log(x);

    document.getElementById("two").style.width = x + "px";
}

document.getElementById("myslide").onmouseleave = function (event) {
    document.getElementById("two").style.width = "375px";
}


//Слайд
document.querySelector("#menuSlide").onmouseover = menuOpen;
document.querySelector("#menuSlide").onmouseout = menuClose;

var d = 0
document.onkeydown = function (event) {
    if (event.code == "KeyM" && d == 0) {
        d = 1;
        menuOpen();
    }
    else if (event.code == "KeyM" && d == 1) {
        d = 0;
        menuClose();
    }
}

function menuOpen() {
    document.querySelector("#menuSlide").style.left = 0;
}

function menuClose() {
    document.querySelector("#menuSlide").style.left = "-496px";
}

function f1(){
    alert('Оплачено')
}

document.getElementById("test").onkeypress = function (event) {
    //console.log(event);
    if (event.keyCode < 48 || event.keyCode > 57) {
        alert("Вводить только цифры");
        return false;
    }
}


//Определяем Desctop или Mobile
document.querySelector("#out").innerHTML = navigator.userAgent;
console.log(navigator);

if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad')) {
    alert('Mobile');
}

else {
    alert('Desktop');
}