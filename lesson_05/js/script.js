let li = document.querySelector('.menu-item'),
		newMenuItem = li.cloneNode(false),
		ul = document.getElementsByTagName('ul')[0],
		ulTest = document.body.getElementsByClassName('menu')[0],
		title = document.getElementById('title'),
		adv = document.querySelector('.adv'),
		column = document.querySelectorAll('.column');
		answer = document.getElementById('prompt'),


//В новый элемент списка добавляем текст
newMenuItem.innerHTML = 'Пятый пункт';
//Вставляем новый элемент списка в конец всего списка
ul.appendChild(newMenuItem);
//Меняем местами элементы
ul.insertBefore(ul.children[2], ul.children[1]);
//Меняем картинку заднего фона
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
//Меняем текст заголовка
title.textContent = 'Мы продаем только подлинную технику Apple';
//Удаляем рекламу
column[1].removeChild(adv);

//Задаём вопрос
let question = prompt('Напишите Вашк отношение к технике Apple', '');
	while (question == '' || question == null) {
		question = prompt('Напишите Вашк отношение к технике Apple', '');
	}
	//И выводим ответ пользователя на экран
answer.innerHTML = question;


console.log(li);
console.log(ul);
console.log(ulTest);
console.log(newMenuItem);
console.log(title);
console.log(column);
console.log(adv);
