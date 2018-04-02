let budget = prompt("Ваш бюджет?");
let shop = prompt("Название вашего магазина?");
let time = 19;

console.log(budget);
console.log(shop);


let mainList,
	shopGoods,
	employers;


mainList = {
	budget: 0,
	shop: "",
	shopGoods: [],
	employers: {},
	open: true
};

// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

for (let i = 0; i<5; i++) {

	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && ((typeof(a)) !== null && a != '' && a.length < 50)) {
		console.log('Всё верно');
		mainList.shopGoods[i] = a;		
	}
}
// вариант 1
let v = 0;

while (v < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	v++;
}

// вариант 2
let b = 0;

do {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	b++;
}
while (b < 5);

// конец дз

if (time < 0) {
	console.log('Да такого не может быть!');
} else if (time > 8 && time < 20) {
	console.log('Время работать!')
	} else if (time < 24) {
		console.log('Уже слишком поздно...');
		} else {
			console.log('В сутках только 24 часа!');
		}


console.log(mainList.shopGoods);

alert("Бюджет на 1 день: " +budget / 30);