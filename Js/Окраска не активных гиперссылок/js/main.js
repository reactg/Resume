let h = document.getElementsByTagName('a');

for(var i = 0; i<h.length; i++){
    
    if(h[i].getAttribute('href') == '#'){
        
        h[i].style.color = 'red';
    }
}
