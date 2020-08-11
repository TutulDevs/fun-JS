
// My Code (I don't know what I did 😛). Chris's code in the bottom

// UI 
let userInput = (function () {
    // Get the DOM Elements
    let DOM = {
       container: '#container',
       yourBill: '#yourBill',
       tipPercent: '#tipPercent',
       tipInput: '#tipInput',
       tipValue: '#tipValue',
       totalWithTip: '#totalWithTip',
       splitValue: '#splitValue',
       splitInput: '#splitInput',
       billEach: '#billEach',
       tipEach: '#tipEach',
       tipMood: '.tipMood'
   };

   return {

       // get input
       getInput: function () {
           return {
               bill: parseFloat(document.querySelector(DOM.yourBill).value),
               tipPerc: parseFloat(document.querySelector(DOM.tipInput).value),
               split: parseFloat(document.querySelector(DOM.splitInput).value)
           }
       },

       // make the DOM accessible
       getDOM: function () {
           return DOM;
       }
   };
}) ();


// Calc & execute
let controller = (function(UI) {

   let dom = UI.getDOM();

   let setEvent = function () {

       document.querySelector(dom.container).addEventListener('input', update);
   };

   let calculation = function () {
       let input, tipValue, tipEach, newBillEach;

       input = UI.getInput();

       // do the calculation
       tipValue = Number(input.bill * (input.tipPerc / 100));
       tipEach = tipValue / input.split;
       newBillEach = (input.bill + tipValue) / input.split;

       //console.log(newBillEach);
       return {
           tipValue: tipValue,
           tipEach: tipEach,
           newBillEach: newBillEach
       };
   };

   let emoji = function () {
        let input = UI.getInput();

        let tipMood = document.querySelector(dom.tipMood);
        if (input.tipPerc < 20) {
            tipMood.textContent = '🙂';
        }else if ( input.tipPerc < 40) {
            tipMood.textContent = '😃'
        }else if (input.tipPerc < 80){
            tipMood.textContent = '😍';
        }else {
            tipMood.textContent = '👻';
        }
   };

   let update = function () {
       let calc = calculation();
       let input = UI.getInput();

       document.querySelector(dom.tipPercent).textContent = input.tipPerc + '%';
       document.querySelector(dom.tipValue).textContent = formatNumber(calc.tipValue);
       document.querySelector(dom.totalWithTip).textContent = formatNumber(input.bill + calc.tipValue);
       document.querySelector(dom.billEach).textContent = formatNumber(calc.newBillEach);
       document.querySelector(dom.tipEach).textContent = formatNumber(calc.tipEach);
       document.querySelector(dom.splitValue).textContent = formatSplit(input.split);

       //console.log(calc);
       emoji();
   };

   let formatNumber = function (num) {
       if (num > 0) {
        let numSplit, int, dec;

        num = Math.abs(num);
        num = Math.ceil(num * 100) /100;
        num = num.toFixed(2);   // 23450 --> 23450.00

        numSplit = num.split('.');
        dec = numSplit[1];  //decimal 00
        int = numSplit[0];  //integer 23450
        if (int.length > 3) {
            int = int.substr(0, int.length -3) + ',' + int.substr(int.length -3, 3);
            // 23450.00 --> 23,450.00
        };

        return '$ ' + num;
    }
   };

   let formatSplit = function (value) {
       if (value === 1) return value + ' Person';
       return value + ' Persons';
   };

   return {
       init: function() {
           console.log('app started 😍😍');

           setEvent();
       }
   };

}) (userInput);

controller.init();




/*

//  Chris' Code (Surely better 😍)
function formatNumber (value) {
    value = Math.ceil(value * 100) / 100;
    // 27.03 3.53
    value = value.toFixed(2);
    return '$ ' + value;
};

function formatSplit(value) {
    if (value === '1') return value + ' person';
    return value + ' persons';
};

function update() {

    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = Number(bill * (tipPercent / 100));
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;

    //display
    document.getElementById('tipPercent').textContent = tipPercent + '%';
    document.getElementById('tipValue').textContent = formatNumber(tipValue);
    document.getElementById('totalWithTip').textContent = formatNumber(bill + tipValue);

    document.getElementById('splitValue').textContent = formatSplit(split);

    document.getElementById('billEach').textContent = formatNumber(newBillEach);
    document.getElementById('tipEach').textContent = formatNumber(tipEach);

    //console.log(newBillEach);

};

let container = document.getElementById('container');

container.addEventListener('input', update);
*/
