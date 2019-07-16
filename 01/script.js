

var money = prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

var appData = { 
    dollars: money, 
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income : [],
     savings: false
};

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(money, time, a2, a3);
console.log(appData);
console.log(appData);

alert(appData.dollars / 30);