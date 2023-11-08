// Получаем элемент
const element = document.querySelector('.lesson__item-list_pink')

// Добавить класс (добавит рядом к уже существующим)
element.classList.add('active')
// Удалить класс
element.classList.remove('active')
// Добавить класс, если его нет, а если есть удалить.
element.classList.toggle('active')
// Проверка наличия класса, возбращает true/false.
element.classList.contains('active')