let lastOperand = 0;
let operation = null;



const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('one').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('two').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('three').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('four').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('five').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('six').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('seven').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('eight').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('nine').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.getElementById('zero').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('plus').addEventListener('click', function () {
   lastOperand = parseInt(inputWindow.value);
   operation = 'plus';
   inputWindow.value = '';
})

document.getElementById('minus').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
 })

 document.getElementById('multi').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multi';
    inputWindow.value = '';
 })

document.getElementById('divide').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '';
})

document.getElementById('Square').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'Square';
    inputWindow.value = '';
})

document.getElementById('resalt').addEventListener('click', function () {
    if (operation === 'plus') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else if (operation === 'minus'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else if (operation === 'multi'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else if (operation === 'divide'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    else if (operation === 'Square'){
        const result = lastOperand (Math.sqrt(inputWindow.value));
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})