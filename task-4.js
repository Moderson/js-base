let word = 'мир'
let res = ''
for (let i = word.length-1; i >= 0; i--) {
    res = res + word[i]
}

console.log(res)

console.log(word.split().reverse().join());