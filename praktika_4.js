    // ! Задача 1
    // Напишите функцию приветствия с языками программирования.
    // Аргументом передаем название языка программирования
    // В результате функция должна вывести в консоль "Привет, о прекрасный язык программирования ИмяЗыка"

    // ? Нужно будет использовать метод строки toLowerCase(). Как думаете зачем?

    // НАЧАЛО
    // Пишите код ниже здесь

    function helloMessage(name) {
        let superName = name.toLowerCase()
        
        alert(`Привет ${superName}!\nРады вас видеть`)
    }
    helloMessage('Александр')
    helloMessage('Адольф')
    helloMessage('Олег')
    helloMessage('Евгений')


    // КОНЕЦ

    
    // ! Задача 2
    // Написать 4 функции для калькулятора
    // Функция сложения двух чисел
    // Функция вычитания двух чисел
    // Функция умножения двух чисел
    // Функция деления двух чисел (Обязательно обработать условие деления на ноль :)
    // Результат функций присвоить в переменные и вывести результат в консоль

    // НАЧАЛО
    // Пишите код ниже здесь
    let ress = (a,b) => a + b
    
    let resm = (a,b) => a - b

    let resmt = (a,b) => a*b
    
    let resd = (a,b) => a/b
    
    function summTwo(a,b) {
        alert(`Ваш ответ:${ress}`)
        return a + b
    }
    

    function minusTwo(a,b) {
        alert(`Ваш ответ:${resm}`)
        return a - b
    }

    function multiplyTwo (a,b) {
        alert(`Ваш ответ:${remt}`)
        
        return a*b
    }
    function divisionTwo(a,b) {
        if (a,b = 0) {
            alert('ай-йа-йай на ноль делить нельзя')
            return
        }
        return a/b
    }
    // КОНЕЦ

    // ! Задача 3 
    // Написать функцию, которая принимаем целое число N.
    // Функция должна вернуть сумму всех четных чисел от 0 до N
    // НАЧАЛО
    // Пишите код ниже здесь

function sumOfNum() {
    const N = (prompt('Введите число'))
    let sum = 0
    for (let i = 0; i <= N; i+=2) {
        sum += i
    }

    return sum
}
    alert(sumOfNum())
    // КОНЕЦ

    // ! Задача 4
    // Написать 2 функции
    // Первая находит минимальный элемент из 3 переданных аргументов
    // Вторая находит минимальный элемент из 3 переданных аргументов
    
    // НАЧАЛО
    // Пишите код ниже здесь
    function findMinValue(a,b,c) {
        let min = a
        if (b < min) {
            min = b
        }
        
        if (c < min) {
            min = c
        }
        return min
    }

    function findMaxValue(a,b,c) {
        let max = a
        if (b > max) {
            max = b
        }

        if (c > max) {
            max = c
        }
        return max
    }
    

    // КОНЕЦ