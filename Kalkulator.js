const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');




operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener("click", displayNumbers)
});

historyBtn.addEventListener("click", clearHistory);


let result = '';



function displayNumbers () {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.'))
    return;
    if(this.textContent === '.' && currentNumber.innerHTML === '')
    return currentNumber.innerHTML = '0.';
    if(this.textContent === '00' && currentNumber.innerHTML === '')
    return;
    if(this.textContent === '00' && currentNumber.innerHTML === '0')
    return;
    if(this.textContent === '0' && currentNumber.innerHTML === '0')
    return;

 



    

    currentNumber.innerHTML += this.textContent;
}

function operate () {
    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return;
    }

    else if(currentNumber.innerHTML === ''){
        return;
    }

    else if(currentNumber.innerHTML === '-')
        return;

    if(mathSign.innerHTML !== ''){
        showResult();
    }
    if(currentNumber.innerHTML !== '-'){
        showResult();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    if(mathSign.innerHTML === '' && previousNumber.innerHTML !== ''){
    mathSign.innerHTML = this.textContent;
}
    currentNumber.innerHTML = '';
}

function showResult() {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '')
    return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;



   
    
    if(currentNumber.innerHTML !== '-'){
    switch(operator) {
        case '+':
        result = b + a;
        break;
        case '-':
        result = b - a
        break;
        case 'x':
        result = b * a;
        break;
        case ':':
        result = b/a;
        break;
        case '^':
        result = b ** a;
        break;
    }}
    else if(currentNumber.innerHTML === '-'){
        result = ''
    }

    if(currentNumber.innerHTML !== '-'){
    addToHistory();
    historyBtn.classList.add('active')
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    clearScreen()
    }
}


function addToHistory () {
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem)
    clearScreen()
}


function clearScreen () {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function clearHistory () {
    calculatorHistory.textContent = '';
    
        historyBtn.classList.remove('active');
    
}
