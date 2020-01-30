document.body.onclick = function(event){
    event = event||window.event;
    
    // (event.target.classList.contains('goods-min'));
    
    if (event.target.classList.contains('goods-min')){
        var allDivs = document.querySelectorAll('.goods-img-min div');
        
        for(var i=0; i<allDivs.length; i++){
            allDivs[i].classList.remove('active');
        }
        document.getElementById('good-max').src = event.target.src;
        event.target.parentElement.classList.add('active');
        
    }
    
}