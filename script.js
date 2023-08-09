let string = '';
const resultElement = document.getElementById('result');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click', (e)=>{
    if(e.target.innerHTML==='='){
        string=eval(string);
        resultElement.innerHTML=string;
    }
    else if(e.target.innerHTML==='C'){
            string='';
            resultElement.innerHTML=string;
        }
    else if(e.target.innerHTML==='%'){
        string=(string/100);
        resultElement.innerHTML=string;
    }
    else if(e.target.innerHTML==='DEL'){
        string=string.substring(0,string.length-1);
        resultElement.innerHTML=string;
    }
        else {
            string += e.target.innerHTML;
            resultElement.innerHTML=string;
            }
            
        })
        })