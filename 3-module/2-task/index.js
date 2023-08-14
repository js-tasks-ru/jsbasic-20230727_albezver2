// Напишите функцию filterRange(arr, a, b), которая принимает массив чисел arr, ищет в нём элементы между a и b и отдаёт массив этих элементов. Если элемент равен a или b, то его тоже нужно включить в отфильтрованный массив.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     // Ваш код
// }

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // [3,1] (совпадающие значения)
// console.log( arr ); // [5,3,8,1] (без изменений)

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let filteredArr = [];
  
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filteredArr.push(arr[i]);
    }
  }
 return filteredArr;
}