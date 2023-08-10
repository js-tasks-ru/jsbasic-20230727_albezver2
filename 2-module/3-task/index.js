// Создайте объект calculator (калькулятор) с тремя методами:

//     read(a, b) (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   // ... ваш код ...
// };

// calculator.read(3, 5);
// console.log(calculator.sum()); // 8
// console.log(calculator.mul()); // 15

let calculator = {
    read: function(a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function() {
      return this.a + this.b;
    },
    mul: function() {
      return this.a * this.b;
    },
  };


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
