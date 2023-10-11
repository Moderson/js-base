let num = prompt('введите число')
function findEvenNumbers(num) {
    if (seatNumber >= 1 && seatNumber <= num) {
        // Вычисляем номер купе
        var coupNumber = Math.ceil(seatNumber / 2);
        return coupNumber;
      } else {
        return "Неверно!";
      }
    }
    
    // Пример использования функции
    var seatNumber = num;
    var coupNumber = findEvenNumbers(seatNumber);
    console.log("кратных чисел: " + coupNumber);
    