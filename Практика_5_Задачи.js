
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


// ЗАДАЧА 3
// Найти сумму элементов массива: значение которых не превышает 20
let array3 = [1, 2, 3, 11, 21, 121, 21, 19,-10, 5, 99]


// ЗАДАЧА 4
// В  массиве записаны оценки ученика по 15 предметам. Определить общее количество четверок и пятерок.
let array4 = [3, 3, 3, 4, 3, 5, 5, 4, 3, 4, 5, 4, 3, 5, 5]


// ЗАДАЧА 5
// Определить количество положительных и  отрицательных элементов массива.
let array5 = [-1, 1,-1, 1,-1, 1,-1, 1,-1, 1,-1]