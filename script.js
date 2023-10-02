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
let time = prompt('Введите минуты')
function findCoupNumber(seatNumber) {
    // Проверяем, что номер места находится в диапазоне от 1 до 59
    if (seatNumber >= 1 && seatNumber <= 59) {
      let coupNumber = Math.ceil(seatNumber / 15);
      return coupNumber;
    } else {
      return "Неверные минуты";
    }
  }
  
  var seatNumber = time;
  var coupNumber = findCoupNumber(seatNumber);
  alert("Четверть часа:" + coupNumber);


console.error('Задание 3')
month = prompt('Введите месяц 1-12')
function getSeason(month) {
  if (month >= 1 && month <= 3 || month == 12) {
    return 'Зима'
  }else if(month >= 3 && month <= 5) {
    return 'Весна'
  }else if(month >= 6 && month <= 8) {
    return 'Лето'
  }else if(month >= 9 && month <= 11){
    return 'Осень'
   }else {
    return 'Неправильный Месяц'
  }
}

let currentSeason = getSeason(month)
alert('Сезон:' + currentSeason)