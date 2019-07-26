

let startBtn = document.getElementById('start'),
    valueDiv = document.querySelectorAll('div.budget-value, div.daybudget-value, div.level-value, div.expenses-value, div.optionalexpenses-value, div.income-value, div.monthsavings-value, div.yearsavings-value'),
    //valueBtn = document.querySelectorAll('.result-table div:nth-child(2n)');
    // valueBtn = document.querySelectorAll('[class *= "value"]');
    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    btnExpensesItem1 = document.getElementsByTagName('button')[0],
    btnExpensesItem2 = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2],
    inputOptionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    inputIncom = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    inputSum = document.querySelector('#sum'),
    inputPercent = document.querySelector('#percent'),
    inputYear = document.querySelector('.year-value'),
    inputMonth = document.querySelector('.month-value'),
    inputDay = document.querySelector('.day-value');
    



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


let money, time;

btnExpensesItem1.disabled = true;
btnExpensesItem2.disabled = true;
btnCountBudget.disabled = true;

btnExpensesItem1.style.color = 'gray';
btnCountBudget.style.backgroundColor = 'gray';






startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
 
    while (isNaN(money) || money == "" || money == null) {
    money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    valueDiv[0].textContent = money.toFixed();

    inputYear.value = new Date(Date.parse(time)).getFullYear();
    inputMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    inputDay.value = new Date(Date.parse(time)).getDate();

    btnExpensesItem1.disabled = false;
    btnExpensesItem2.disabled = false;
    btnCountBudget.disabled = false;
});

var sumOZ = 0;

btnExpensesItem1.addEventListener('click', function() {
    // let sum = 0;

    for (let i = 0; i < inputExpensesItem.length; i++) {
        let a = inputExpensesItem[i].value,
        b = inputExpensesItem[++i].value;
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sumOZ += +b;
        } else {
            i = i-1;
            valueDiv[3].textContent = 'Проверьте зачение';
        }
    }
    valueDiv[3].textContent = sumOZ;
});

btnExpensesItem2.addEventListener('click', function(){
    for(let i = 0; i < inputOptionalExpensesItem.length; i++) {
        let opt = inputOptionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        valueDiv[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCountBudget.addEventListener('click', function() { /////////

    if(appData.budget != undefined) {
        appData.moneyPerDey = ((appData.budget - sumOZ) / 30).toFixed(); //вычитаем из месячного бюджета обязательные расходы и делим на 30
        valueDiv[1].textContent = appData.moneyPerDey;

        if (appData.moneyPerDey < 100) { valueDiv[2].textContent = 'минимальный уровень достатка' }
        else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) { valueDiv[2].textContent = 'средний уровень достатка';}
        else if (appData.moneyPerDey > 2000) { valueDiv[2].textContent = 'высокий уровень достатка';}
        else { valueDiv[2].textContent = 'произошла ошибка';}
    } else {
        valueDiv[1].textContent = 'произошла ошибка';
    }

});

inputIncom.addEventListener('input', function() {
    let items = inputIncom.value; 
    appData.income = items.split(', ');
    valueDiv[5].textContent = appData.income;
});

checkboxSavings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings == false;
    } else {
        appData.savings == true;
    }
});

inputSum.addEventListener('input', function() {
    if (appData.savings == true){
        let sum = +inputSum.value,
        percent = +inputPercent.value;

        appData.monthIncom = sum/100/12*percent;
        appData.yearIncom = sum/100*percent;

        valueDiv[6].textContent = appData.monthIncom.toFixed(1);
        valueDiv[7].textContent = appData.yearIncom.toFixed(1);
    }
});

inputPercent.addEventListener('input', function() {
    if (appData.savings == true){
        let sum = +inputSum.value,
        percent = +inputPercent.value;

        appData.monthIncom = sum/100/12*percent;
        appData.yearIncom = sum/100*percent;

        valueDiv[6].textContent = appData.monthIncom.toFixed(1);
        valueDiv[7].textContent = appData.yearIncom.toFixed(1);
    }
});



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true
};


// appData.chooseIncome();
// console.log(appData.income);
