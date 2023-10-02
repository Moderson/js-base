//с использованием switch
//  let month = 5
// если при использовании promt переменная принимает значение default то нужно перед prompt написть +
 let month = +prompt('Введите месяц')
 console.log(month)

function getSeasons(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            return 'Зима'
            break;
        case 3:
        case 4:
        case 5:
            return 'Весна'
            break;
        case 6:
        case 7:
        case 8:
            return 'Лето'
            break;
        case 9:
        case 10:
        case 11:
            return 'Осень'
            break;

        default :
            return 'Ты шо?!'
            break;

    }
}

let currentSeason = getSeasons(month)
alert('Сезон: ' + currentSeason)
// console.log('Сезон: ' + currentSeason)