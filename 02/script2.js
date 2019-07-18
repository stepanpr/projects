let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};




// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');

// 		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 			console.log('done');
// 			appData.expenses[a] = b;
// 		} else {
// 			continue;
// 	}
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


var i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = prompt("Во сколько обойдется?", '');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		continue;
    }
    i++;
} while (i<2)



appData.moneyPerDey = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDey);

if (appData.moneyPerDey < 100) console.log('минимальный уровень достатка');
else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) console.log('средний уровень достатка');
else if (appData.moneyPerDey > 2000) console.log('высокий уровень достатка');
else console.log('произошла ошибка');