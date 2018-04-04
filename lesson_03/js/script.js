//Третий урок по JS
//Объявляем переменные.
let money,
				name,
				time,
				price,
				newPrice,
				dayBudget,
				amountEmployers
//Объявляем функцию, где задаются стартоые вопросы.
function start() {
	money = prompt("Ваш бюджет?");
	while(isNaN(money) || money == '' || money == null) {
		alert('Нужно обязательно ввести число!');
		money = prompt("Ваш бюджет?");
	}
	name = prompt("Название вашего магазина?").toUpperCase();
	time = 25;
}
//Вызываем функцию.
start();

//Заполняем объект.
let mainList = {
				budget: money,
				shopName: name,
				shopGoods: [],
				employers: {},
				open: false,
				discount: false
}

//Объявляем функцию, где будем спрашивать про тип товара.
function chooseGoods() {
	for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if (a === null || a === '') {
		alert('Нужно обязательно что-то ввести!');
		i--;
		} else	if ((typeof(a)) === 'string' && a.length > 20) {
				alert('Нужно ввести менее 20 символов!');
				i--;
			} else mainList.shopGoods[i] = a;
	}
}
//Вызываем функцию.
chooseGoods();

//Объявляем функцию, где будем просить ввести имя сотрудников
function getEmployers(amount) {
	amountEmployers = amount;
	for (let i = 0; i < amount; i++) {
		let a = prompt("Введите имя сотрудника");
		mainList.employers[i] = a;
	}
}
getEmployers(4);


//Объявляем функцию, где будем рассчитывать дневной бюджет
function calcDayBudget() {
	dayBudget = mainList.budget / 30;
}
//Вызываем функцию.
calcDayBudget();

//Объявляем функцию, где будем задавать цену и статус дисконта
function calcPrice(setPrice, setDiscount) {
	price = setPrice;
	discount = setDiscount;
	if (setDiscount == true) {
		newPrice = setPrice * 0.8;
	} else newPrice = setPrice;
}
//Вызываем функцию с заданными параметрами.
calcPrice(1000, true);

//Объявляем функцию, проверяющую время.
function workTime(time) {
	if (time < 0) {
	console.log('Такого не может быть!');
	} else if (time >= 8 && time <= 20) {
			console.log('Время работать!');
			} else if (time < 24) {
				 console.log('Нужно отдохнуть!');
					} else {
							console.log('В сутках только 24 часа!');
							}
}
//Вызываем функцию с параметром времени.
workTime(18);

//Выводим результат на экран
document.write('Название Вашего магазина:<br>', mainList.shopName, '<br><br>');
document.write('Вы собираетесь продавать следующие товары:<br>');
for (i = 0; i < 5; i++) {
	document.write(mainList.shopGoods[i], '<br>');
}
document.write('<br>Ваш бюджет:<br>', mainList.budget, '<br><br>');
//Выведем на экран бюджет за 1 день.
document.write('Ваш бюджет на 1 день составляет:<br>');
document.write(dayBudget, '<br><br>');
//Выведем на экран цену в зависимости дисконта.
document.write('Исходная цена: ', price, '<br>');
document.write('Дисконт: ', discount, '<br>');
document.write('Новая цена: ', newPrice, '<br><br>');
document.write('Имена Ваших сотрудников:<br>');
for (i = 0; i < amountEmployers; i++) {
	document.write(mainList.employers[i], '<br>');
}
//Выводим в консоль все данные из объекта.
console.log(mainList);





