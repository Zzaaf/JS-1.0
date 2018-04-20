// работа скрипта начнётся после загрузки всех DOM узлов
window.addEventListener('DOMContentLoaded', function() {
  let mainSection   = document.querySelector('.main'),
      startOverlay  = document.querySelector('.overlay'),
      modalWindow   = document.querySelector('.popup'),
      popupButton   = document.getElementById('popup-btn'),      
      readyButton   = document.getElementById('ready'),      
      resetButton   = document.getElementById('reset'),      
      votingButton  = document.getElementById('voting'),      
      crimeButton   = document.getElementById('crime'),      
      customSection = document.querySelector('.custom');

  // анимация появления модального окна средствами animate.css
  modalWindow.classList.add('animated', 'fadeIn');

  // анимация и событие при клике на кнопку "Создать"
  popupButton.addEventListener('click', function() {
    // анимация исчезновения модального окна средствами animate.css
    startOverlay.classList.add('animated', 'fadeOut');
    // делаем display: none; для подложки
    startOverlay.style.display = "none";
    // делаем display: none; для главного экрана
    mainSection.style.display = "none";
    // добавляем свой css класс для реализации display: flex; 
    customSection.classList.add('display-flex');
    // добавляем свой css класс для реализации display: block; дочерним элементам
    for (let i = 0; i < customSection.children.length; i++) {
        customSection.children[i].classList.add('display-block');
    };
  });

  // анимация и событие при клике на кнопку "Готово"
  readyButton.addEventListener('click', function() {
    // удаляем свой css класс для реализации display: none;
    customSection.classList.remove('display-flex');
    // анимация появления главного экрана средствами animate.css
    mainSection.classList.add('animated', 'fadeIn');
    // добавляем display: block;
    mainSection.style.display = "block";
  });
});