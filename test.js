// const person ={
//     name: 'John Marston',
//     birthDate: '22.08.1823',
//     isPremium: true,
//     level: 15
// }
// console.log(person['birthDate'])
//Удаляем данную birthDate
// delete(person['birthDate'])
//Добавляем данную onlinestatus и присваиваем ей значение active
// person.onlinestatus = 'active'
// console.log(person);




// let brDate = prompt('введите год рождения')
// let year = 2023
// confirm("Вы ТОЧНО хотите изменить год вашего рождения?"); if (confirm = true) {
//  brDate = prompt("Введите год рождения на который вы заменяете предедущий")
// }

// const player ={
//     name : "Иосиф Виссерионович Сталин",
//     birthDate : brDate,
//     age :  2023-brDate,
//     greet(){
//     console.log(`Здравствуй меня зовут ${this.name}`)
//     },
//     leftUntilRetirement: 2023+60-brDate
// }
// player.greet()

// console.log(player)
//найти польз. с самым младшим возраст и написать метод который найдет сумму всех зарплат

const money = [
    {
    name: 'Маша',
    age: 20,
    zarplata: 100000,
    },
    {
    name: 'Юля',
    age: 25,
    zarplata: 150000,
    },
    {
    name: 'Петя',
    age: 29,
    zarplata: 250000,
    },
    ]



console.log(money);


function findHighestEarning(array) {
    let highestEarning = 0;
    for (let i = 0; i < array.length; i++) {
    if (array[i].zarplata > highestEarning) {
    highestEarning = array[i].zarplata;
    }
    }
    return highestEarning;
    }
    
    function findYoungestUser(array) {
    let youngestUser = {
    name: '',
    age: Number.MAX_VALUE
    };
    
    for (let user of array) {
    if (user.age < youngestUser.age) {
    youngestUser = user;
    }
    }
    
    return youngestUser;
    }
    
    const youngestUser = findYoungestUser(money);
    const highestEarning = findHighestEarning(money);
    console.log(`Самый молодой пользователь: ${youngestUser.name}(${youngestUser.age} лет`);
    console.log(`Максимальная зарплата: ${highestEarning}`)