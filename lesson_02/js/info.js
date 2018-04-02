if(4*2 == 8*1) {
	console.log('Да, это тоже самое ;)')
} else {
	console.log('Это разные вещи!')
}

// первый цикл где последний else без значения
let num = 50;

if (num < 49) {
	console.log('Нет, неверно (num)')
} else if (num > 100) {
	console.log('И так, неверно (num)')
	} else {
		console.log('Вот так верно (num)')
	}

// второй цикл где else со значением, значит это уже else if
let num_2 = 50;

if (num_2 < 49) {
	console.log('Нет, неверно (num)')
} else if (num_2 > 100) {
	console.log('И так, неверно (num)')
	} else if (num_2 == 50) {
		console.log('Вот так верно (num_2)')
	}

// опрос тернарным оператором возраста
var stop = false, 
	//age  = prompt("Сколько тебе лет бро?");
	age  = 16;
// первое действие если верно, второе если нет
age > 18 ? location.assign("continue.html") : stop = true;

// проверка множества условий с помощью оператора switch
// let num_3 = prompt("Ладно, тогда сколько будет 25+25?");
let num_3 = 50;

switch (num_3) {
	case 49:
		console.log('Мало');
		break;
	case 100:
		console.log('Мало');
		break;
	case 80:
		console.log('Всё ещё много');
		break;
	case 50:
		console.log('В точку!');
		break;			
	default:
		console.log('Не в этот раз');
		break;
}

// цикл while? почему не 5 раз? а просто (5)?
let num_4 = 50;

while (num_4 < 55) {
	console.log('num_4');
	num_4++;
}

// цикл do, сначала действия, потом проверка на условие
let num_5 = 500;

do {
	console.log('num_5');
	num_5++;
}
while (num_5 < 510);

// цикл for 
for (let i = 0; i < 8; i++) {
	console.log('i');
}