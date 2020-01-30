// Карта котиков

window.onload = function(event){
    document.querySelector('#show-description').onclick = function(){
        document.querySelector('.description').classList.toggle('hide');
        let descriptionCla = document.querySelector('.description').classList;
        let classArray = Array.from(descriptionCla);

        if(classArray.indexOf('hide') != -1){
            document.querySelector('#show-description').style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/iconset-1-1/24/icon_set_outlinder-02-128.png")';
        }
        else{
            document.querySelector('#show-description').style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/iconset-1-1/24/icon_set_outlinder-04-128.png")';
        }
        
    } 
}
