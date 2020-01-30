window.onload=init;

function init(){
    var images = document.getElementsByTagName('img');
    for(var i = 0; i<images.length; i++){
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
    
}

function showAnswer(eventObj){
    var b = eventObj.target;
    var name = b.id;
    name = "img/" + name + '.jpg';
    b.src = name;

    // setTimeout(reblur, 2000, b)
}

function reblur(eventObj){
    var b = eventObj.target;
    var name = b.id;
    name = "img/" + name + 'blur.jpg';
    b.src = name; 
}

