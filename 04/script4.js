

let money, time;

function start() {

    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseEspenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        
                if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                    console.log('done');
                    appData.expenses[a] = b;
                } else {
                    i = i-1;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDey = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDey);
    },
    detectLevel: function(){
        if (appData.moneyPerDey < 100) {console.log('минимальный уровень достатка'); }
        else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {console.log('средний уровень достатка');}
        else if (appData.moneyPerDey > 2000) {console.log('высокий уровень достатка');}
        else {console.log('произошла ошибка');}
    },
    checkSavings: function(){
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt('Под какой процент?');
    
            appData.monthIncom = save/100/12*percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncom);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i <= 3; i++) {
            let opt = +prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for(let i=0; i<2; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечисилте через запятую', '');
            if (typeof(items) === 'string' && items != null && items != '' && items.length < 400) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
                i++;
            }
            else{
                i--;
            }
        }

        appData.income.forEach(function(item, i){
            console.log("Способы доп. заработка: " + +(i+1) + ' : ' + item);
        });

    }
    

};


appData.chooseIncome();
console.log(appData.income);


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}


//     var i = 0;
// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {
// 		i = i - 1;
//     }
//     i++;
// } while (i<2)
// }

// var i = 0;
// while (i<2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {
// 		continue;
//     }
//     i++;
// }



