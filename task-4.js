// let word = 'мир'
// let res = ''
// for (let i = word.length-1; i >= 0; i--) {
//     res = res + word[i]
// }

// console.log(res)

// console.log(word.split().reverse().join());
let a1 = ''
let a2 = ''
let a3 = '123456'
 a1 = +a3[0] + +a3[1] + +a3[2]
 a2 = +a3[3] + +a3[4] + +a3[5]
 if (a1==a2) {
    alert('сумма первых 3 цифр равняется другой')
 }else{
    alert('сумма первых 3 цифр не равняется другой')
 }
