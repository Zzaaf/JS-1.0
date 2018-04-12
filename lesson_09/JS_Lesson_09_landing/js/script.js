//Запускаем скрипт только после завершения построения браузером модели страницы
window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
				 tabContent = document.getElementsByClassName('info-tabcontent'),
				 info = document.getElementsByClassName('info-header')[0];
/*Скрываем контент (если а=0, то весь; если а=1, то всё, кроме 1-ой статьи
(используется при первом запуске))*/
	function hideTabContent(a) {
			for(i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
	};
//При первом запуске скрываем все вкладки, кроме первой
	hideTabContent(1);
//Скрываем все табы и показываем только тот, по которому кликнули
	function showtabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
		}
	}
/*Ждём клика по вкладкам. Слушаем родителя вкладки и перебираем массив
со вкладками в поиске той, по которой кликнули*/
	info.addEventListener('click', function(event) {
			let target = event.target;
			if(target.className == 'info-header-tab') {
					for(i = 0; i < tab.length; i++) {
						if(target == tab[i]) {
								showtabContent(i);
								break;						}
					}
			};
	});

	//Countdown
	//Зададим время в формате местной зоны, указав кроме даты ещё и время полуночи
	let deadline = '2018-04-05 00:00';
	//Получаем время,оставшееся до заданного, и разбираем его на составляющие
	function getRemainingTime(endTime) {
		let difTime = Date.parse(endTime) - Date.parse(new Date()),
						seconds = Math.floor((difTime/1000) % 60),
						minutes = Math.floor((difTime/1000/60) % 60),
						hours = Math.floor(difTime/1000/60/60);
						//Полученные значения возвращаем в объект
						return {
							'total': difTime,
							'seconds': seconds,
							'minutes': minutes,
							'hours': hours
						};
	};
	//С интервалом в 1 секунду записываем оставшееся время в сответствующие поля сайта
	function setClock(id, endTime) {
		let timer = document.getElementById(id),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						seconds = timer.querySelector('.seconds'),
						action = document.getElementsByClassName('timer-action')[0];
/*Обязательно задаём timeInterval до вызова функции, иначе при отрицательном времени
и попытке выполнить clearInterval(timeInterval) выпадет ошибка, что эта переменная не задана*/
		let timeInterval = setInterval(updateClock, 1000);
		updateClock();
		function updateClock() {
			let t = getRemainingTime(endTime);
			if(t.hours > 9) {
				hours.innerHTML = t.hours;
			} else {
				hours.innerHTML = '0' + t.hours;
			};
			if(t.minutes > 9) {
				minutes.innerHTML = t.minutes;
			} else {
				minutes.innerHTML = '0' + t.minutes;
			};
			if(t.seconds > 9) {
				seconds.innerHTML = t.seconds;
			} else {
				seconds.innerHTML = '0' + t.seconds;
			};
			if( t.total <= 0 ) {
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
				action.innerHTML = 'Акция завершена';
			};
		};
	};
	setClock('timer', deadline);
/*----------------------------------------------------*/
	//Плавная прокрутка по якроным ссылкам
	let nav = document.getElementsByTagName('nav')[0],
					link = nav.querySelectorAll('[href^="#"]'),
					header = nav.offsetHeight;
	for( i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(event) {
	//Перебираем кнопки с якорными ссылками и отключаем их стандартное поведение
			event.preventDefault();
			let id = this.href.replace(/[^#]*(.*)/, '$1'), //Получаем содержимое ссылки href, то есть id элемента
							top = document.querySelector(id).getBoundingClientRect().top, //Координата блока по ссылке
							current = document.documentElement.scrollTop;
							console.log(top, current, header);
			//Вызываем функцию анимации и передаём ей данные для расчёта пункта назначения
			animate(top, current, header);
		});

	};

	function animate(top, current, header) {
		//Запоминаем момент времени, когда вызвали функцию по клику
		let start = performance.now();

		requestAnimationFrame(function animate(time) {
			//time содержит текущее время
		 let timePassed = time - start, //Определяем, сколько прошло времени с начала анимации
		 				timeScroll = 1000; //Для анимации отводим 1 секунду

			 if(timePassed > timeScroll) {
/*Т.к. шаг времени зависит от функции requestAnimationFrame, то в конце анимации получаем последнее
число, которое по величине превышает timeScroll. Из-за этого скролл экрана получится немного
дальше, чем задано. Поэтому в последней точке анимации жёстко прописываем фиксированное время
timeScroll и останавливаемся точно, где надо*/
			 	timePassed = timeScroll;
			 }
				document.documentElement.scrollTop = current + (top-header)*(timePassed/timeScroll);
			 //Если время анимации не закончилось, то выполним ещё один кадр
				if (timePassed < timeScroll) {
				  requestAnimationFrame(animate);
				}
			});
};

//Modal

	let more = document.querySelector('.more'),
					overlay = document.querySelector('.overlay'),
					close = document.querySelector('.popup-close'),
					more_tab = document.getElementsByClassName('description-btn');

  function showModal() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
  };
  more.addEventListener("click", showModal);
  for( i = 0; i < more_tab.length; i++) {
  	more_tab[i].addEventListener('click', showModal);
  }

  function hideModal() {
			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = "";
  };
		close.addEventListener('click', hideModal);

		console.log(more_tab);
		console.log(more_tab.length);

});

