// Сделаем из этого небольшую игру кликер

const button = document.querySelector('.lesson__btn');
let count = 0

function gameClicker() { 
	count++
	
	console.log('Ультра Мега Клик!' + count)
	if (count == 15) {
		console.warn('Мистер кликер, Доволен Собой?')
	}
	if (count == 30) {
		console.error('может перестанешь?')
	}
	if (count == 50){
		console.info('Перестань это уже раздражает');
	}
	if (count == 55){
		console.log('Доигрался }:[')
		count = 0
	}
}

button.onclick = gameClicker