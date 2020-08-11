
const tracker = (function() {
    let dom = {
        form: '.form',
        formInput: '.form__input',
        formButton: '.form__button',
        entriesList: '.entries__list',
        sumTotal: '#total',
        average: '#average',
        highest: '#high',
        progTotal: '.progress__total',
        progTarget: '.progress__target',
        progCircle: '.progress__container--circle',
        progCenter: '.progress__container--center',
        goal: Number(25)
    };
   
    let items = [];
    const entriesList = document.querySelector(dom.entriesList);

    
    const setEvent = function() {
        document.querySelector(dom.formButton).addEventListener('click', update);
    };

    function update (event) {
        //console.log('clicked');
        event.preventDefault();

        const inputValue = Number(document.querySelector(dom.formInput).value).toFixed(1);
        // print nothing if the input is nothing
        if(!inputValue) return;
        // reset the form
        document.querySelector(dom.form).reset();

        // add the inputs in an array
        items.push(Number(inputValue));
        console.log(items);

        addItem(inputValue);
        calcTotal();
        calcGoal();
    };

    function addItem(newItem) {
            // remove the first child
            entriesList.removeChild(entriesList.firstElementChild); 

            const listItem = document.createElement('li'); // <li></li>
            const listValue = document.createTextNode(newItem); // 5

            listItem.appendChild(listValue); // <li>5</li>

            // publish the listItem in the DOM
            entriesList.appendChild(listItem);
    };

    function reducer (total, currentValue) {
        return total + currentValue;
    };

    function calcTotal () {
        const totalValue = items.reduce(reducer).toFixed(1);

        document.querySelector(dom.sumTotal).textContent = totalValue;

        document.querySelector(dom.progTotal).textContent = totalValue;
        //  Average
        document.querySelector(dom.average).textContent = (totalValue / items.length).toFixed(1);
        // Highest
        document.querySelector(dom.highest).textContent = Math.max(...items);
    };
    
    function calcGoal () {
        const totalValue = items.reduce(reducer).toFixed(1);
        const completedPercentage = totalValue / (dom.goal / 100);
        
        // Display
        const progCircle = document.querySelector(dom.progCircle);
        const progCenter = document.querySelector(dom.progCenter);

        if (totalValue < 25) {
            progCircle.style.background = `conic-gradient(#0AD9FF ${completedPercentage}%, #2D3740 ${completedPercentage}% 100%)`;
        }else if (totalValue == 25){
            progCenter.textContent = 'Completed!';
            progCircle.style.background = '#bada55';
        }else {
            progCenter.textContent = 'Overkill 💀';
            progCircle.style.background = '#ff0';
        }
    };

    return {
        init: function () {
            console.log('App started 😃');

            document.querySelector(dom.formInput).focus();
            document.querySelector(dom.progTarget).textContent = dom.goal;

            setEvent();
        }
    };
})();

tracker.init();




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