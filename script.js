console.error('Задача 1');
for (let i = 0; i < 5000; i++) {
 console.log(i);
}
console.error('Задача 2');
// В программе объявлены две переменные start и end. Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. Результат выведите в консоль.

// Пример значений переменных:
// start = 0 end = 50
// Пример результата:
// 275
let end = 0
for (let start = 0;  start <= 90; start+=5) {
  if (start % 5 == 0) {
    end +=start
  }
  console.log(end)
}

let sum = 0
for (let i = 0; i <= 90; i++) {
  if (i % 5 == 0) {
    sum += i
  }
}
console.log(sum)
console.error('Задача 3');
// В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль.

// Пример значений переменных:
// word = "мир"
// Пример результата:
// "рим"
// let word = prompt('Напишите слово')
// let res = ''
// for (let i = word.length-1; i >= 0; i--) {
//     res = res + word[i]
// }

// alert(res)

// console.log(word.split().reverse().join());

// console.error('Задача 4');
// Задача 4

// В программе объявлена переменная word, в которой записано строковое значение. Определите, является ли word палиндромом:

// - если является, выведите в консоль "Слово является палиндромом!";
// - если не является, выведите в консоль "Слово не является палиндромом!".

// Примечание:
// Строка word состоит только из букв разного регистра (большие и маленькие).

// Пример значений переменных:
// word = "Доход"
// Пример результата:
// "Слово является палиндромом!"
// let words = prompt('Напишите слово')
// let palendrom = ''
// for (let i = words.length-1; i >= 0; i--) {
//   palendrom = palendrom + words[i]
// }
// if (word==palindrom) {
//   console.log('Это Слово является палиндромом!')
// }
// else{
// console.log('Слово не является палиндромом!')
// }


function isPalendrom(words,palendrom) {
  let res = ''
  for (let i = words.length-1; i >= 0; i--) {
    res += words[i]
  }
  if (words==res) {
    return true
  }
  else{
  return false
  }
}

console.log(isPalendrom(prompt('Напишите слово')));

console.error('Задача 5');
// Задача 5 *

// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// Входная строка 123321
// Пример результата:
// Да: 6 = 6

// Входная строка 111222
// Пример результата:
// Нет: 3 != 6

// 1 способ (без применения цикла)
let a1 =prompt('Введите 6 цифр') 
let a2 = ''
let a3 = ''
a2 = +a1[0] + +a1[1] + +a1[2]
 a3 = +a1[3] + +a1[4] + +a1[5]
 if (a2==a3) {
    alert('Сумма первых 3 цифр равняется другой')
 }
 else{
    alert('Сумма первых 3 цифр не равняется другой')
 }

// 2 Способ (с применением цикла)
function checkDigitsEquality(str) {
  let sumDigits1 = 0;
  let sumDigits2 = 0;
  for (let i = 0; i < 3; i++) {
    sumDigits1 += Number(str[i])
  }

  for (let i = 3; i < 6; i++) {
    sumDigits2 += Number(str[i])
  }

  if (sumDigits1 === sumDigits2) {
    return "Да"
  } else {
    return "Нет"
  }
}
const inputString = prompt('Введите 6 цифр')
const result = checkDigitsEquality(inputString)
console.log(result)