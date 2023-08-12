// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите функцию namify, которая преобразует их в массив имён.

// Например:

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

// let names = namify(users); // ['Вася', 'Петя', 'Маша']

function namify(users) {
  let arrNames = [];
  
  for (let user of users) {
  arrNames.push(user.name);
  }
  
  return arrNames;
}

// namify(users);