const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const plus = document.querySelector('.plus');
const divide = document.querySelector('.divide');
const percent = document.querySelector('.percent');
const clear = document.querySelector('.clear');
const allclear = document.querySelector('.allclear');
const label = document.querySelector('.label');
const screen = document.querySelector('.screen');
let result = document.querySelector('.result');
let final = '';
let i=0;

function nBtn(num){
    if(label.clientWidth > 295){
        label.style.fontSize = '18px';
    }
    if(label.clientWidth > 295){

    }
    else{
        if(label.textContent.charAt(label.textContent.length-1)!=='='){
            if(label.textContent.charAt(label.textContent.length-1)=='.'){
                label.textContent += num;
                final += num;
            }
            else if(label.textContent.length==1 && label.textContent.charAt(label.textContent.length-1)==0){
                label.textContent = num;
                final += num;
            }
            else{
                label.textContent += num;
                final += num;
            }
        }
    }
}

function operators(op){
    if(label.textContent.charAt(label.textContent.length-1) !== '+' && label.textContent.charAt(label.textContent.length-1) !== '*' && label.textContent.charAt(label.textContent.length-1) !== '-' && label.textContent.charAt(label.textContent.length-1) !== '/' && label.textContent.charAt(label.textContent.length-1) !== '%' && label.textContent.charAt(label.textContent.length-1) !== '='){
    label.textContent += op;
    final += ` ${op} `;
    i=0;
    }
}


one.addEventListener('click', () => {nBtn(1)});

two.addEventListener('click', () => {nBtn(2)});

three.addEventListener('click', () => {nBtn(3)});

four.addEventListener('click', () => {nBtn(4)});

five.addEventListener('click', () => {nBtn(5)});

six.addEventListener('click', () => {nBtn(6)});

seven.addEventListener('click', () => {nBtn(7)});

eight.addEventListener('click', () => {nBtn(8)});

nine.addEventListener('click', () => {nBtn(9)});

zero.addEventListener('click', () => {
    if(label.clientWidth > 295){
        label.style.fontSize = '18px';
    }
    if(label.clientWidth > 295){
        
    }
    else{
        if(label.textContent.length==1 && label.textContent.charAt(label.textContent.length-1)==0){
            label.textContent = 0;
        }
        else{
            label.textContent += 0;
            final += 0;
        }
    }
})


plus.addEventListener('click', () => {operators('+')});

subtract.addEventListener('click', () => {operators('-')});

multiply.addEventListener('click', () => {operators('*')});

divide.addEventListener('click', () => {operators('/')});

percent.addEventListener('click', () => {operators('%')});

clear.addEventListener('click', () => {
    if(label.clientWidth < 160){
        label.style.fontSize = '37px';
    }
    result.textContent = '';
    if(label.textContent.length == 1){
        label.textContent = 0;
        final=final.slice(0,-1);
        i=0;
    }
    else{
        if(label.textContent.charAt(label.textContent.length-1) == '+' || label.textContent.charAt(label.textContent.length-1) == '*' || label.textContent.charAt(label.textContent.length-1) == '-' || label.textContent.charAt(label.textContent.length-1) == '/' || label.textContent.charAt(label.textContent.length-1) == '%'){
            label.textContent = label.textContent.slice(0,-1);
            final = final.slice(0, -3);
            console.log('bupnulo1');
            console.log(final);
            result.textContent = '';
        }
        else if(label.textContent.charAt(label.textContent.length-1) == '='){
            label.textContent = label.textContent.slice(0,-1);
            console.log('bupnulo2');
            console.log(final);
        }
        else{
            label.textContent = label.textContent.slice(0,-1);
            final = final.slice(0, -1);
        }
    }
})

dot.addEventListener('click', () => {
    if(i==0 && label.textContent.charAt(label.textContent.length-1) !== '+' && label.textContent.charAt(label.textContent.length-1) !== '*' && label.textContent.charAt(label.textContent.length-1) !== '-' && label.textContent.charAt(label.textContent.length-1) !== '/' && label.textContent.charAt(label.textContent.length-1) !== '%' && label.textContent.charAt(label.textContent.length-1) !== '=' &&  label.textContent.charAt(label.textContent.length-1) !== '.'){
        label.textContent += '.';
        final += '.';
        i++
    }
})

allclear.addEventListener('click', () => {
    label.style.fontSize = '37px'
    label.textContent = '0';
    final = '0';
    result.textContent = '';
    i=0;
})


function calculate(firstNumber, operator, secondNumber) {
	firstNumber = Number(firstNumber);
	secondNumber = Number(secondNumber);
    if (operator === '+') return firstNumber + secondNumber;
    if (operator === '-') return firstNumber - secondNumber;
    if (operator === '*') return firstNumber * secondNumber;
    if (operator === '/') return firstNumber / secondNumber;
    if (operator === '%') return firstNumber % secondNumber;
}

equal.addEventListener('click', () => {
    const operators = ['%', '*', '/', '-', '+'];
    let para = final.split(' ');
    let para2;
    if(label.textContent.charAt(label.textContent.length-1) !== '+' && label.textContent.charAt(label.textContent.length-1) !== '*' && label.textContent.charAt(label.textContent.length-1) !== '-' && label.textContent.charAt(label.textContent.length-1) !== '/' && label.textContent.charAt(label.textContent.length-1) !== '%' && label.textContent.charAt(label.textContent.length-1) !== '='){
        if(!label.textContent.includes('=')){
            for(let i=0;i<operators.length;i++){
                while(para.includes(operators[i])){
                    let operatorIndex = para.findIndex(item => item === operators[i]);
                    let firstNumber = para[operatorIndex-1];
                    console.log('prvi broj')
                    console.log(firstNumber)
                    let operator = para[operatorIndex];
                    console.log('operator')
                    console.log(operator)
                    let secondNumber = para[operatorIndex+1];
                    console.log('drugi broj')
                    console.log(secondNumber)
                    para2 = calculate(firstNumber, operator, secondNumber);
                    console.log('para2')
                    console.log(para2);
                    para.splice(operatorIndex - 1, 3, para2);
                }
            }
            result.textContent = para2;
            label.textContent += '=';
        }
    }
    if(result.clientWidth > 295){
        result.style.fontSize = '35px';
    }
})