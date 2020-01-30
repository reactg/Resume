//Код цезаря

document.getElementById('in').oninput = function(){
    const offset = 3;
    let help = document.getElementById('help');
    //из кода в символ
    help.innerHTML = String.fromCharCode(97);
    let str = this.value;
    //Из символа в код
    console.log(str.charCodeAt(0));
    let out = ' ';
    for(let i = 0; i<str.length; i++){
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);

    }
    document.getElementById('out').innerHTML = out;
}