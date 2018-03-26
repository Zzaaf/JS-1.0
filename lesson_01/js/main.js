var budget = prompt("Ваш бюджет?");
var shop = prompt("Название вашего магазина?");
console.log(budget);
console.log(shop);


var mainList,
	shopGoods,
	employers;


mainList = {
	budget: 0,
	shop: "",
	shopGoods: [],
	employers: {},
	open: true
};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

console.log(mainList.shopGoods);

alert("Бюджет на 1 день: " +budget / 30);

