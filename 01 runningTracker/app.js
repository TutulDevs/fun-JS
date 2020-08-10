
/*
const goal = 25;
document.querySelector('.progress__target').textContent = goal;

let entries = [];
const entriesList = document.querySelector('.entries__list');

function addNewEntry(newEntry) {
    // remove the first child
    entriesList.removeChild(entriesList.firstElementChild);

    const listItem = document.createElement('li'); // <li></li>
    const listValue = document.createTextNode(newEntry.toFixed(1)); // input value
    listItem.appendChild(listValue); // <li>3.4</li>

    // publish the listItem in the DOM
    entriesList.appendChild(listItem);
};

function reducer (total, currentValue) {
    return total + currentValue;
};

function calcTotal () {
    const totalValue = entries.reduce(reducer).toFixed(1);

    document.querySelector('#total').textContent = totalValue;
    document.querySelector('.progress__total').textContent = totalValue;

    //  Average
    document.querySelector('#average').textContent = (totalValue / entries.length).toFixed(1);

    // Highest
    document.querySelector('#high').textContent = Math.max(...entries);
};

function calcGoal () {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercentage = totalValue / (goal / 100);
    
    // Display
    const progCircle = document.querySelector('.progress__container--circle');
    progCircle.style.background = `conic-gradient(#0AD9FF ${completedPercentage}%, #2D3740 ${completedPercentage}% 100%)`;
};

function handleSubmit(event) {
    event.preventDefault();

    const entry = Number(document.querySelector('.form__input').value);

    // print nothing if the input is nothing
    if(!entry) return;
    // reset the form
    document.querySelector('.form').reset();
    // add: focus()

    // add the inputs in an array
    entries.push(entry);

    //console.log(entries);

    addNewEntry(entry);
    calcTotal();
    calcGoal();
};




const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

*/