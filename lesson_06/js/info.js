let btn = document.getElementsByTagName('button');

// event может быть любым ;)
btn[0].addEventListener('dblclick', function(event) {
	console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
	alert("Ещё и окно выведем!");
});
