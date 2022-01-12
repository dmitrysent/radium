const text = document.querySelector('.text');

/*
по заданию понял, что клик мышкой по любой части документа?
Если клик на текст, то слущать события addEventListenet вешаем на text: 
text.addEventListener('click', () => {
	text.style.opacity = '0';
	});
*/

document.body.addEventListener('click', () => {
	text.style.opacity = '0';
});

document.body.addEventListener('keypress', (e) => {
	if (e.keyCode === 32) {
		text.innerHTML = ''; 
	}
});
