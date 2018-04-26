window.addEventListener('DOMContentLoaded', function () {
  let number_1    = document.getElementById('number_1'),
      number_2    = document.getElementById('number_2'),
      number_3    = document.getElementById('number_3'),
      number_4    = document.getElementById('number_4'),
      number_5    = document.getElementById('number_5'),
      number_6    = document.getElementById('number_6'),
      number_7    = document.getElementById('number_7'),
      number_8    = document.getElementById('number_8'),
      number_9    = document.getElementById('number_9'),
      result      = document.getElementById('result'),
      clearResult = document.getElementById('clearResult'),
      clearErrors = document.getElementById('clearErrors');

number_1.addEventListener('click', function() {
  console.log('Нажата кнопка #1');
  for (let i = 0; i < 10; i++) {
    result.textContent = number_1.value;
    i++;
  }  
});

number_2.addEventListener('click', function() {
  console.log('Нажата кнопка #2');

});

number_3.addEventListener('click', function() {
  console.log('Нажата кнопка #3');

});

number_4.addEventListener('click', function() {
  console.log('Нажата кнопка #4');

});

number_5.addEventListener('click', function() {
  console.log('Нажата кнопка #5');

});

number_6.addEventListener('click', function() {
  console.log('Нажата кнопка #6');

});

number_7.addEventListener('click', function() {
  console.log('Нажата кнопка #7');

});

number_8.addEventListener('click', function() {
  console.log('Нажата кнопка #8');

});

number_9.addEventListener('click', function() {
  console.log('Нажата кнопка #9');

});

clearResult.addEventListener('click', function() {
  console.log('Нажата кнопка #Clear');
  result.textContent = clear();
});
//DOMContentLoaded close
});