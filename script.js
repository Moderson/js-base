console.error('Задание 1')
console.log('Решение Задачи 4:')

console.log('const answer1 = prompt(\'Введи число\')')

console.log('if (answer1 > 0) (alert("Это положительное число"))')

console.log('if (answer1 < 0) (alert("Это отрицательное число"))')

console.log('if (answer1 == 0) (alert("Это 0"))')

console.error('Задание 1.1')
let age = 20
if (age >= 14 && age <= 90){
    console.log('Вам 14-90 Лет!')
}

console.error('Задание 1.2')
//<aside> Напишите условие `if` для проверки, что значение переменной `age` НЕ находится в диапазоне `14` и `90` включительно.
//Напишите два варианта: первый с использованием оператора НЕ `!`, второй – без этого оператора.
age = 13
if (age >= 14 && age <= 90 ){
    console.log('Вам 14-90 лет')
} else{
    console.log('Вам Не 14-90 лет') 
 }

//2 вариант
if (age < 14 || age > 90 ){
    console.log('Вам Не 14-90 лет')
} else{
   console.log('Вам 14-90 лет') 
}

console.error('Задание 2')
let time =45