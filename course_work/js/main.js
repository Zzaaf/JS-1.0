window.addEventListener('DOMContentLoaded', function () {
	let overlay         = document.getElementsByClassName('overlay')[0],
			modal           = overlay.getElementsByClassName('popup')[0],
			modalButton     = document.getElementById('popup-btn'),
			main            = document.getElementsByClassName('main')[0],
			mainCards       = main.getElementsByClassName('main-cards-item'),
			custom          = document.getElementsByClassName('custom')[0],
			customInfo      = custom.getElementsByClassName('custom-info')[0],
			customName      = document.getElementById('name'),
			customAge       = document.getElementById('age'),
			customRadio     = custom.getElementsByClassName('radio')[0],
			customRadioMale = document.getElementById('male'),
			customSex       = document.getElementsByName('sex'),
			customSelect    = document.getElementById('select'),
			customViews     = customSelect.options[customSelect.selectedIndex].value,
			customBio       = document.getElementById('bio'),
 			customReady     = document.getElementById('ready'),
			president       = {
				fullName: '',
				age: '',
				sex: '',
				views: '',
				biography: '',
				skin: '',
				clothes: '',
				hair: '',
				shoes: ''
			},
			candidate 	   = [],
			ageMessage     = document.getElementById('age-message'),
			showAgeMessage = {
				nan:     'Введите корректный возраст',
				young:   'Кандидат в президенты не может быть моложе 35 лет',
				old: 		 'Возраст слишком велик',
				veryOld: 'Проверьте правильность ввода возраста, он вызывает сомнения'
			},
			customOk       = {
				name: false,
				age: false,
				bio: false
			};
	
		// кастомизация персонажа
		let personSkin 		= document.getElementById('person-skin'),
				personClothes = document.getElementById('person-clothes'),
				personHair 		= document.getElementById('person-hair');

		// слайдер
		let skin         = document.querySelector('.skin'),
				skinColor    = skin.getElementsByClassName('skin-color'),
				hair 				 = document.querySelector('.hair'),
				hairStyle    = hair.getElementsByClassName('hair-style'),
				clothes 		 = document.querySelector('.clothes'),
				clothesStyle = clothes.getElementsByClassName('clothes-style'),
				prev 				 = document.getElementsByClassName('prev'),
				next 				 = document.getElementsByClassName('next'),
				skinIndex    = 1,
				clothesIndex = 1,
				hairIndex    = 1;

	// заполняем нулями массив с кандидатами
	for ( let i = 0; i <= 2; i++) {
			candidate[i] = {
				result: 0,
				progress: 0
			};
	};

	resetCandidate();
	// событие с модальным окном
	modal.classList.add('animated', 'fadeIn');
	// событие нажатия кнопки на модальном окне и переход в окно кастомизации
	modalButton.addEventListener('click', function() {
		setTimeout(function() {
   overlay.classList.add('animated', 'fadeOut');
   }, 500);
		modal.classList.remove('bounceInUp');
		modal.classList.add('bounceOutUp');
		main.classList.add('hide');
  setTimeout(showCustom, 1300);
		setTimeout(function() {overlay.style.display = "none"}, 2000);
	});

	// получение имени кандидата
	customName.addEventListener('change', function() {
		customOk.name = false;
		let name = this.value;
		// удаляем все символы, кроме русских букв
			name = name.replace(/\w/g, '');
		// удаляем все пробелы в начале строки
		for (let i = 0; i < name.length; i++) {
			if (name.charAt(0) == ' ') {
				name = name.replace(/\s/, '');
			} else {
					break
			};
		};
		// удаляем все пробелы в конце строки
		for (let i = name.length; i > 0; i--) {
			if (name.charAt(name.length - 1) == ' ') {
				name = name.substring(0, name.length - 1);
			} else {
				break
			};
		};
		// записываем обратно в поле ввода имя без боковых пробелов
		this.value = name;
		// проверям имя на длину
		if (name.length < 3) {
			customName.style.color = '#ff0000';
			customName.classList.remove('input-border');
			customName.classList.add('input-border-alarm');
		} else {
			customName.style.color = '#ffffff';
			customName.classList.remove('input-border-alarm');
			customName.classList.add('input-border');
			customOk.name = true;
			if (customOk.age == true && customOk.name == true && customOk.bio == true) {
				customInfo.style.border = 'none';
			};
		};
		president.fullName = name;
		console.log(president);
	});

		// получаем возраст кандидата
		customAge.addEventListener('change', function() {
			customOk.age = false;
			let age = this.value.replace(/\s/g, '');
			if (isNaN(age) == true || age.length == 0 || age == '0') {
				age = '';
				this.value = age;
				ageMessage.innerHTML = showAgeMessage.nan;
			} else if (age < 35) {
					customAge.style.color = '#ff0000';
					customAge.classList.remove('input-border');
					customAge.classList.add('input-border-alarm');
					ageMessage.innerHTML = showAgeMessage.young;
			}	else if (age >= 65 && age < 100) {
					customAge.style.color = '#ff0000';
					customAge.classList.remove('input-border');
					customAge.classList.add('input-border-alarm');
					ageMessage.innerHTML = showAgeMessage.old;
			} else if (age >= 100) {
					customAge.style.color = '#ff0000';
					customAge.classList.remove('input-border');
					customAge.classList.add('input-border-alarm');
					ageMessage.innerHTML = showAgeMessage.veryOld;
			}	else {
				customOk.age = true;
				customAge.style.color = '#ffffff';
				customAge.classList.remove('input-border-alarm');
				customAge.classList.add('input-border');
				president.age = age;
				ageMessage.innerHTML = '';
				if (customOk.age == true && customOk.name == true && customOk.bio == true) {
					customInfo.style.border = 'none';
				};
				console.log(president);
			};
	});

 // установка пола и внешнего вида при загрузки страницы
 for (let i = 0; i < customSex.length; i++) {
     if (customSex[i].type == "radio" && customSex[i].checked) {
         president.sex = customSex[i].value;
     };
 };
 president.views = customViews;
 president.shoes = 'url(img/clothes/construct/shoes.png)';

 // событие смены пола
	customRadio.addEventListener('click', function(event) {
		if (event.target && event.target.type == 'radio' && event.target.checked) {
			president.sex = event.target.value;
			showSkins(skinIndex);
			showClothes(clothesIndex);
			showHair(hairIndex);
			console.log(president);
		};
	});
 
 // событие смены взглядов
 customSelect.addEventListener('change', function() {
 	customViews = this.options[this.selectedIndex].value;
 	president.views = customViews;
 	console.log(president);
 });

	// получаем биографию кандидата
	customBio.addEventListener('change', function() {
		customOk.bio = false;
		let bio = this.value;
		// удаляем все символы, кроме русских букв
			bio = bio.replace(/\w/g, '');
		// удаляем все пробелы в начале строки
		for (let i = 0; i < bio.length; i++) {
			if (bio.charAt(0) == ' ') {
				bio = bio.replace(/\s/, '');
			} else {
					break
			};
		};
		// удаляем все пробелы в конце строки
		for (let i = bio.length; i > 0; i--) {
			if (bio.charAt(bio.length - 1) == ' ') {
				bio = bio.substring(0, bio.length - 1);
			} else {
				break
			};
		};
		// записываем обратно в поле ввода имя без боковых пробелов
		this.value = bio;
		// проверям имя на длину
		if (bio.length <= 10) {
			customBio.style.color = '#ff0000';
			customBio.classList.remove('input-border');
			customBio.classList.add('input-border-alarm');
		} else {
			customBio.style.color = '#ffffff';
			customBio.classList.remove('input-border-alarm');
			customBio.classList.add('input-border');
			customOk.bio = true;
			if (customOk.age == true && customOk.name == true && customOk.bio == true) {
				customInfo.style.border = 'none';
			};
		};
		president.biography = this.value;
		console.log(president);
	});
    
	// определяем, можно ли голосовать
	customReady.addEventListener('click', function() {
		if (customOk.name == false || customOk.age == false || customOk.bio == false) {
			console.log('Нельзя голосовать!');
			console.log(customInfo);
			customInfo.style.border = '2px solid #ff0000';
			if (customOk.name == false) {
				customName.classList.remove('input-border');
				customName.classList.add('input-border-alarm');
			};
			if (customOk.age == false) {
				customAge.classList.remove('input-border');
				customAge.classList.add('input-border-alarm');
			};
			if (customOk.bio == false) {
				customBio.classList.remove('input-border');
				customBio.classList.add('input-border-alarm');
			};
		} else {
				customInfo.style.border = '2px solid #11bd2b';
				tryVoting();				
			};		 
	});


	// экран голосования
	let reset  = document.getElementById('reset'),
			voting = document.getElementById('voting'),
			crime  = document.getElementById('crime');

	// сброс результатов и возврат на страницу кастомизации
	reset.addEventListener('click', function() {
		hideVoting();
		setTimeout(function() {
			resetCandidate();
			showCustom();
			mainCards[2].remove();
		}, 1500);
	});

	// честное голосование
	voting.addEventListener('click', function() {
		console.log('Honest voting');
		startVoting(0);
	});

	// вмешательство в выборы
	crime.addEventListener('click', function() {
		console.log('Crime voting');
		startVoting(25);
	});

	// показываем кожу
	showSkins(skinIndex);
	function showSkins(n) {
		if (n > 3) {
			skinIndex = 1;
		};
		if (n < 1) {
			skinIndex = 3;
		};
		for ( let i = 0; i < 3; i++) {
			skinColor[i].style.display = 'none';
		};
		skinColor[skinIndex - 1].style.display = 'block';
		if (president.sex == 'Мужской') {
			personSkin.style.backgroundImage = `url(img/skin/skin-${skinIndex}.png)`;
			president.skin = `url(img/skin/skin-${skinIndex}.png)`;
		} else if (president.sex == 'Женский') {
			personSkin.style.backgroundImage = `url(img/skin/skin-${skinIndex+3}.png)`;
			president.skin = `url(img/skin/skin-${skinIndex+3}.png)`;
		};
	};

	// показываем одежду
	showClothes(clothesIndex);
	function showClothes(n) {
		if (n > 3) {
			clothesIndex = 1;
		};
		if (n < 1) {
			clothesIndex = 3;
		};
		for ( let i = 0; i < 3; i++) {
			clothesStyle[i].style.display = 'none';
			clothesStyle[i+3].style.display = 'none';
		};
		if (president.sex == 'Мужской') {
			clothesStyle[clothesIndex - 1].style.display = 'block';
			personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesIndex}.png)`;
			president.clothes = `url(img/clothes/construct/clothes-${clothesIndex}.png)`;
		} else if (president.sex == 'Женский') {
			clothesStyle[clothesIndex + 2].style.display = 'block';
			personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesIndex+3}.png)`;
			president.clothes = `url(img/clothes/construct/clothes-${clothesIndex+3}.png)`;
		};
	};

	// показываем волосы
	showHair(hairIndex);
	function showHair(n) {
		if (n > 3) {
			hairIndex = 1;
		};
		if (n < 1) {
			hairIndex = 3;
		};
		for ( let i = 0; i < 3; i++) {
			hairStyle[i].style.display = 'none';
			hairStyle[i+3].style.display = 'none';
		};
		if (president.sex == 'Мужской') {
			hairStyle[hairIndex - 1].style.display = 'block';
			personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairIndex}.png)`;
			president.hair = `url(img/hair/construct/hair-${hairIndex}.png)`;
		} else if (president.sex == 'Женский') {
			hairStyle[hairIndex + 2].style.display = 'block';
			personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairIndex+3}.png)`;
			president.hair = `url(img/hair/construct/hair-${hairIndex+3}.png)`;
		};
	};

	// события кнопки "Слайдер влево"
	for ( let i = 0; i < prev.length; i++) {
		prev[i].addEventListener('click', function() {
			if (this.parentNode == skin) {
				plusSkins(-1);
				} else if (this.parentNode == clothes) {
						plusClothes(-1);
						} else if (this.parentNode == hair) {
								plusHair(-1);
						};
		});
	// события кнопки "Слайдер вправо"
		next[i].addEventListener('click', function() {
			if (this.parentNode == skin) {
				plusSkins(1);
				} else if (this.parentNode == clothes) {
						plusClothes(1);
						} else if (this.parentNode == hair) {
								plusHair(1);
						};
		});
	};

	function plusSkins(n) {
		showSkins(skinIndex += n);
	};
	function plusClothes(n) {
		showClothes(clothesIndex += n);
	};
	function plusHair(n) {
		showHair(hairIndex += n);
	};

 // голосование
 function tryVoting() {
		for ( let i = 0; i <= 2; i++) {
				candidate[i].result = 0;
		};
			setResults();
			hideCustom();
	  // добавляем копию карточки кандидата
	  let newCard = mainCards[1].cloneNode(true);
	  mainCards[1].parentNode.insertBefore(newCard, mainCards[1].nextSibling);
	  // записываем в эту карточку данные нового кандидата
	  let newCardName = newCard.querySelector('.name'),
				newCardAge = newCard.querySelector('.age'),
				newCardSex = newCard.querySelector('.sex'),
				newCardViews = newCard.querySelector('.views'),
				newCardBio = newCard.querySelector('.bio'),
				newCardPhoto = newCard.querySelector('.photo');
			  newCardName.innerHTML = president.fullName;
			  newCardAge.innerHTML = `${president.age} лет`;
			  newCardSex.innerHTML = president.sex;
			  newCardViews.innerHTML = president.views;
			  newCardBio.innerHTML = president.biography;
			  newCardPhoto.style.cssText = `background-image: ${president.shoes},
																												${president.clothes},
																												${president.hair},
																												${president.skin};
																			background-size: cover;`;
	  // меняем у третьего кандидата скопированный класс progress-bar-2 на progress-bar-3
			let progress = document.querySelectorAll('.progress-bar');
			progress[2].classList.remove('progress-bar-2');
			progress[2].classList.add('progress-bar-3');
			for ( let i = 0; i <= 2; i++) {
					candidate[i].progress = 0;
			};
			setProgress();
			setTimeout(showVoting, 1500);
 };

	// показать окно кастомизации
	function showCustom() {
		custom.classList.remove('hide');
		custom.classList.add('show-flex');
		for (let i = 0; i < custom.children.length; i++) {
			custom.children[i].classList.add('show-block');
		 if (custom.children[i].classList.contains('custom-char')) {
		     custom.children[i].classList.remove('animated', 'fadeOut');
		     custom.children[i].classList.add('animated', 'fadeIn');
		   		} else {
		       custom.children[i].classList.remove('animated', 'fadeOut');
		       custom.children[i].classList.add('animated', 'fadeIn');
		      	};
		};
	};

	// скрыть окно кастомизации
	function hideCustom() {
		for (let i = 0; i < custom.children.length; i++) {
  if (custom.children[i].classList.contains('custom-char')) {
  				custom.children[i].classList.remove('animated', 'fadeIn');
      custom.children[i].classList.add('animated', 'fadeOut');
  } else {
  				custom.children[i].classList.remove('animated', 'fadeIn');
      custom.children[i].classList.add('animated', 'fadeOut');
     };
  setTimeout(function() {
   custom.classList.remove('show-flex');
	  custom.classList.add('hide');
  	}, 1500);
  };
	};

	// показать окно голосования
	function showVoting() {
		resetFrame();
	  main.classList.remove('hide');
	  main.classList.add('show-block');
	  main.classList.remove('animated', 'fadeOut');
	  main.classList.add('animated', 'fadeIn');
	};

	// скрыть окно голосования
	function hideVoting() {
		main.classList.remove('animated', 'fadeIn');
		main.classList.add('animated', 'fadeOut');
		setTimeout(function() {
			main.classList.remove('show-block');
			main.classList.add('hide');
		}, 1500);
	};

	// установка результатов
	function setResults() {
		result = document.querySelectorAll('.result-count');
		for (let i = 0; i < result.length; i++) {
			result[i].innerHTML = candidate[i].result + '%';
		};
	};

	// установка шкалы прогресса
	function setProgress() {
		let progress = document.querySelectorAll('.progress-bar');
		for (let i = 0; i < progress.length; i++) {
			let bar = document.querySelector(`.progress-bar-${i + 1}`);
			bar.style.height = candidate[i].progress + '%';
		};
	};

	// генератор случайных целых чисел
	function getRandomInRange(min, max) {
	 return Math.floor(Math.random() * (max - min)) + min;
	};

	// голосование
	function startVoting(bonus) {
		let results    = [];
			  results[0] = getRandomInRange(1, 100 - bonus),
				results[1] = getRandomInRange(1, 100 - bonus - results[0]),
				results[2] = 100 - results[1] - results[0];
		for ( let i = 0; i <= 2; i++) {
				candidate[i].result = results[i];
				candidate[i].progress = results[i];
		};
		setResults();
		setProgress();
		setFrame();
	};

	// установка синей рамки для победителя выборов
	function setFrame() {
		resetFrame();
		let maximum = Math.max(candidate[0].result, candidate[1].result, candidate[2].result);
		for (let i = 0; i <= 2; i++) {
			if (candidate[i].result == maximum) {
					mainCards[i].classList.add('main-cards-item-active');
			};
		};
	};
	function resetFrame() {
		for (let i = 0; i < mainCards.length; i++) {
			mainCards[i].classList.remove('main-cards-item-active');
		};
	};

	// сброс всех данных кандидата
	function resetCandidate() {
		// делаем красный бордюр для полей ввода
		customName.classList.add('input-border-alarm');
		customAge.classList.add('input-border-alarm');
		customBio.classList.add('input-border-alarm');
		customInfo.style.border = 'double 2px #ff0000';
		// сбрасываем все значения кандидата на первоначальные
		president.fullName = '';
		president.age = '';
		president.sex = 'Мужской';
		president.views = '';
		president.biography = '';
		customOk.name = false;
		customOk.age = false;
		customOk.bio = false;
		// первоначальные значения записываем в поля
		customName.value = president.fullName;
		customAge.value = president.age;
		customBio.value = president.biography;
		customRadioMale.checked = true;
		customSelect.selectedIndex  = 0;
		skinIndex = 1,
		clothesIndex = 1,
		hairIndex = 1;
		showSkins(skinIndex);
		showClothes(clothesIndex);
		showHair(hairIndex);
	};

});