

let start = document.getElementById('start'),
    valueDiv = document.querySelectorAll('div.budget-value, div.daybudget-value, div.level-value, div.expenses-value, div.optionalexpenses-value, div.income-value, div.monthsavings-value, div.yearsavings-value'),
    //valueBtn = document.querySelectorAll('.result-table div:nth-child(2n)');
    // valueBtn = document.querySelectorAll('[class *= "value"]');
    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    btnExpensesItem1 = document.getElementsByTagName('button')[0],
    btnExpensesItem2 = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2],
    inputOptionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    inputIncom = document.querySelector('#choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    inputSum = document.querySelector('#sum'),
    inputPercent = document.querySelector('#percent'),
    inputYear = document.querySelector('.year-value'),
    inputMonth = document.querySelector('.month-value'),
    inputDay = document.querySelector('.day-value');
    

document.querySelector('.title').style.fontSize = '1.5em';
start.style.color = 'red';

// let valueDiv = document.querySelectorAll('.result-table')[0].children; //поиск значения в классе 1
// for(let i=0; i < valueDiv.length; i++){
//     let x = valueDiv[i].getAttribute('class');
//     if(x.indexOf('value') ) {
//         console.log(x);
//     }
// }

// let valueDiv = document.querySelectorAll('.result-table')[0].children; //поиск значения в классе 2
// for(let i=0; i < valueDiv.length; i++){
//     let x = valueDiv[i].getAttribute('class');
//     if(x.includes('value')) {        
//         console.log(x);
//     }
// }

