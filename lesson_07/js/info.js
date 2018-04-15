let timeAfterTime = setTimeout(time, 2000);

function time() {
	console.log('Пустота на месте звёзд...');
	for (i = 0; i < 10; i++) {
	timeAfterTime = setTimeout(time, 2000);
	}
}