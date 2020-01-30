let q = document.querySelectorAll('.header-bg');
let colors = ['0099e5','ff4c4c','048374','f47721','ff6c5f','49c0b6'];


for (let i = 0; i < q.length; i++){
    
    let bgDiv = document.createElement('div');

    bgDiv.style.height = q[i].offsetHeight +'px';
    bgDiv.style.width = q[i].querySelector('h2').offsetWidth + 'px';
    bgDiv.style.transform = 'rotate(' + randomInteger(-10,10) + 'deg)';
    bgDiv.style.backgroundColor = '#' + colors[randomInteger(0,colors.length - 1)];
    bgDiv.classList.add('square-bg'); 
    q[i].appendChild(bgDiv);
}

function randomInteger(min,max){
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}