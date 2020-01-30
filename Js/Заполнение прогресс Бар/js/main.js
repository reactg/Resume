
ПРОГРЕСС БАР!!!!

function user(time){
    var start = 0;
    var time = Math.round(start*10);
    var progressElement = document.getElementById('user');
    var intervalId = setInterval(function(){
        
        
        if(start>=101){
            clearInterval(intervalId);
            userProgressCallBack();
        }
        else{
            progressElement.value = start;
        }
        start++;
    },time)
}

function userProgressCallBack(){
    document.querySelector('.blook').style.display = 'block';
}
user(100);