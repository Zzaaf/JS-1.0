//Четвёртый урок по JS
let money,
				name,
				time,
				price,
				newPrice,
				dayBudget
//Объявляем функцию, где задаются стартоые вопросы.
function start() {
	money = prompt("Ваш бюджет?", '');
	while(isNaN(money) || money == '' || money == null) {
		alert('Нужно обязательно ввести число!');
		money = prompt("Ваш бюджет?", '');
	}
	name = prompt("Название вашего магазина?", '').toUpperCase();
	time = 25;
}
start();

//Заполняем объект.
let mainList = {
				budget: money,
				shopName: name,
				shopGoods: [],
				employers: {},
				open: false,
				discount: true,
				shopItems: [],
				chooseGoods: function chooseGoods() {
				for (let i = 0; i < 5; i++) {
					let a = prompt("Какой тип товаров будем продавать?", '');
					if (a === null || a === '') {
							alert('Нужно обязательно что-то ввести!');
							i--;
							} else	if ((typeof(a)) === 'string' && a.length > 20) {
									alert('Нужно ввести менее 20 символов!');
									i--;
									} else mainList.shopGoods[i] = a;
						}
				},
				workTime: function workTime(time) {
				if (time < 0) {
				console.log('Такого не может быть!');
				} else if (time >= 8 && time <= 20) {
						console.log('Время работать!');
						mainList.open = true;
						} else if (time < 24) {
							 console.log('Нужно отдохнуть!');
								} else {
										console.log('В сутках только 24 часа!');
										}
				},
				calcDayBudget: function calcDayBudget() {
					dayBudget = mainList.budget / 30;
				},
				calcPrice: function calcPrice(setPrice) {
					price = setPrice;
					discount = mainList.discount;
						if (discount == true) {
							newPrice = setPrice * 0.8;
						} else newPrice = setPrice;
				},
				hireEmployers: function hireEmployers() {
						for (let i = 0; i < 4; i++) {
							let a = prompt("Введите имя сотрудника", '');
							mainList.employers[i] = a;
						}
				},
				chooseShopItems: function chooseShopItems() {
					let items = prompt('Перечислите через запятую Ваши товары', '');
						while (items == '' || items == null) {
							items = prompt('Перечислите через запятую Ваши товары', '');
						}
					mainList.shopItems = items.split(',');
					let addItem = prompt('Подождите, может ещё один товар?', '')
						while (addItem == '' || addItem == null) {
							addItem = prompt('Подождите, может ещё один товар?', '');
						}
					mainList.shopItems.push(addItem);
					mainList.shopItems.sort();
				}
}
mainList.chooseShopItems();

//Выводим результат на экран
document.write('Название Вашего магазина:<br>', mainList.shopName, '<br><br>');
document.write('Ваш бюджет:<br>', mainList.budget, '<br><br>');
document.write('У нас Вы можете купить:<br>');
mainList.shopItems.forEach(function(item, i, shopItems) {
	let position = i + 1;
	document.write(position + '. ' + item + '<br>')
});
document.write('<br>Наш машазин включает в себя:<br>');
for (let key in mainList.shopItems) {
	let position = +key + 1;
	document.write(position + '. ' + mainList.shopItems[key] + '<br>');
}

console.log(mainList);
