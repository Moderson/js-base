
// ЗАДАЧА 1
let array1 = [1,1,2,3,5,8,13,21,35]

//а
 const summOfNumbers = array1.reduce((acc,array1) => acc+array1,0)
console.log(summOfNumbers);

//б
const multiplyOfNumbers = array1.reduce((acc,array1) => acc*array1)
console.log(multiplyOfNumbers);

//в
const kvadratOfNumbers = array1.reduce((acc,array1) => acc+= array1**2, 0 )
console.log(kvadratOfNumbers);

//г
let sum = 0
for (let i = 0; i < 6; i++) {
    sum += (array1[i]);
}
console.log(sum);

//е
let summ = 0
for (let i = 0; i < 8; i++) {
    summ += (array1[i]) / array1.length;
}
console.log(summ);

//ё
let summa = 0
for (let i = 0; i <= 8 ; i++) {
    if (array1[i] % 2 != 0) {
        summa += (array1[i]);
   }
}
console.log(summa);

// Определить:
// а)  сумму всех элементов массива;
// б)  произведение всех элементов массива;
// в)  сумму квадратов всех элементов массива;
// г)  сумму шести первых элементов массива;
// е)  среднее арифметическое всех элементов массива;
// ё)  сумму нечетных элементов


// ЗАДАЧА 2 
// Выяснить, верно ли, что сумма элементов массива есть неотрицательное число.
let array2 = [-1, 1,-1, 1,-1, 1,-1, 1,-1, 1,-1]
//г
function findNumb(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }   
    return sum
}

console.log(findNumb(array2))

if (findNumb(array2) < 0) {
    console.log("Сумма отрицательна!");
} else {
    console.log('Сумма положительна')
}

// ЗАДАЧА 3
// Найти сумму элементов массива: значение которых не превышает 20
let array3 = [1, 2, 3, 11, 21, 121, 21, 19,-10, 5, 99]
    let suma = 0
const numbToDelete =(20)
const filterNumbers = array3.filter((array3) => array3 < numbToDelete )
console.log(filterNumbers);

Array.prototype.sum = function() {
    sum = 0
    this.map(e => sum += e)
    return sum
}


let res = filterNumbers.reduce((sum, e) => sum += e)
console.log(res)

console.log(filterNumbers.sum())




// function findNum(filterNumbers,suma) {
//     for (let i = 0; i < filterNumbers.length; i++) {
//          suma += filterNumbers[i];
       
//         }
//         return suma
// }
// console.log(suma);

// ЗАДАЧА 4
// В  массиве записаны оценки ученика по 15 предметам. Определить общее количество четверок и пятерок.
let array4 = [3, 3, 3, 4, 3, 5, 5, 4, 3, 4, 5, 4, 3, 5, 5]

const numbToDelet =5
const filterNumber = array4.filter((array4) => array4 == numbToDelet )
console.log(`Всего пятерок: ${ filterNumber.length}`);


const numbToDele =4
const filterNumbe = array4.filter((array4) => array4 == numbToDele )
console.log(`Всего четвёрок: ${ filterNumbe.length}`);
// ЗАДАЧА 5
// Определить количество положительных и  отрицательных элементов массива.
let array5 = [-1, 1,-1, 1,-1, 1,-1, 1,-1, 1,-1]

const numbToDel = 0
const filterNumb = array5.filter((array5) => array5 < numbToDel )
console.log(`Всего отрицательных чисел: ${filterNumb.length}`)

const numbToDe = 0
const filterNum = array5.filter((array5) => array5 >= numbToDe )
console.log(`Всего положительных чисел: ${filterNum.length}`)