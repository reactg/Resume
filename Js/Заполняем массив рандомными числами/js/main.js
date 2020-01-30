document.querySelector('button').onclick = function(){
    let l = document.querySelector('#length').value;
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;

    let result = [];
    for(let i = 0; i<l;i++){
    result.push(randomInteger(min,max));
    }
    console.log(result);
    document.querySelector('#out').innerHTML = result;
    //преобразование массива в строку с помощью инпута. 
    document.querySelector('#out-1').value = result;
    
    return result;
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}