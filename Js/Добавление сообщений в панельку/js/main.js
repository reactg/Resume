window.onload = () => {
    document.querySelector('#chips-show').onclick = () => {
        let text = document.querySelector('#chops-test').value;
        document.querySelector('#chops-test').value = '';
        let chips = document.createElement('div');
        chips.classList.add('chips');
        chips.innerHTML = text;

        document.body.appendChild(chips);

        if(!document.querySelector('#chips-field')){ 
            let chipsField = document.createElement('div');
            chipsField.id = 'chips-field';
            document.body.appendChild(chipsField);
        }
        document.querySelector('#chips-field').appendChild(chips);
        setTimeout(
            () => {
                chips.remove();
                removeCF();
            },
            3000
        );
        
    }
    function removeCF(){
        let chips = document.querySelectorAll('#chips-field .chips');
        if( chips.length == 0 ){
            document.querySelector('#chips-field').remove();
        }
    }   
}