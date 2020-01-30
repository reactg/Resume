//Число в объект
class cutNum {
    constructor (a){
        if(typeof a == 'number' && a>=0 && a<=1000){
            this.n = a%10;
            this.nn = Math.floor(a/10%10);
            this.nnn = Math.floor(a/100);
        }
        else{
            console.log('error');
        }
    }
}

let num = new cutNum(21);
console.log(num);




