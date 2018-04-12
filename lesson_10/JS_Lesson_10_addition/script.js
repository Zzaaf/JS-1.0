var body = document.body;
class options {
	constructor(height, width, bg, fontSize, textAlign, text) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.text = text;
	}
	createDiv() {
		let div = document.createElement('div');
		//Задаём свойства стилей по отдельности через переменные
		// div.style.height = this.height + 'px';
		// div.style.width = this.width + 'px';
		// div.style.backgroundColor = this.bg;
		// div.style.fontSize = this.fontSize + 'px';
		// div.style.textAlign = this.textAlign;
		div.innerHTML = this.text;

		//Воспользуемся строкой стилей style.cssText
		  div.style.cssText = `height: ${this.height}px; 
																					    width: ${this.width}px; 
																					    background-color: ${this.bg}; 
																					    font-size: ${this.fontSize}; 
																					    text-align: ${this.textAlign};
																							  `;

		return body.appendChild(div);
	}
}

const firstDiv = new options(100, 200, 'red', 20, 'center', 'Я создал новый контейнер с текстом!');
const secondDiv = new options(200, 300, 'green', 25, 'left', 'Я создал новый контейнер с текстом!');

firstDiv.createDiv();
secondDiv.createDiv();
