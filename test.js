const lesson = document.querySelector('.lesson')
const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')

// Добавяем в конец блока todo-list элемент со значением из поля ввода
function addTodoItem(value) {
	// Если поле ввода пустое, то не добавляем новый элемент
	if (value == '') return

	// Вставить HTML в самый конец блока todoList
	todoList.insertAdjacentHTML('beforeend', `
		<div class="todo-list__item">
			<p>${value}</p>
		</item>
	`)
}

// Удалить последний элемент в списке
function deleteTodoItem() {
	let todoListItems = document.querySelectorAll('.todo-list__item')
	
	// Проверяем, есть ли на странице хотя бы один такой элемент
	if (todoListItems.length > 0) {
    // Получаем последний элемент в списке
    let lastItem = todoListItems[todoListItems.length - 1]
    // Удаляем его
    lastItem.remove()
	}
}

lesson.addEventListener("click", function (event) {
	if (event.target.closest('.lesson__btn.add')) {
		addTodoItem(todoInput.value)
		todoInput.value = ''
	}

	if (event.target.closest('.lesson__btn.remove')) {
		console.log('Remove called')
		deleteTodoItem()
	}
})