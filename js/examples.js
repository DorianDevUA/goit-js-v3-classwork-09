// TODO: Цікаві задачі з курсу вивчення JavaScript.

// ============== Example ======================
// Приклад використання if...else_if...else
// =============================================
// Дедлайн здачі проекту.
// Напиши скрипт для відображення часу дедлайну здачі проекту.
// Використовуй конструкцію if...else.
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 2;

// if (daysUntilDeadline >= 3) {
//   console.log('Дата у майбутньому');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else {
//   console.log('Сьогодні');
// }

// ============== Example ======================
// Приклад використання switch...case...default
// =============================================
// Дедлайн здачі проекту.
// Напиши скрипт для відображення часу дедлайну здачі проекту.
// Використовуй switch.
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// Якщо дедлайн сплинув - виведи рядок "Друже, ти проспав!"

// const daysUntilDeadline = -2;

// if (daysUntilDeadline >= 0) {
//   switch (daysUntilDeadline) {
//     case 0:
//       console.log('Сьогодні');
//       break;
//     case 1:
//       console.log('Завтра');
//       break;
//     case 2:
//       console.log('Післязавтра');
//       break;
//     default:
//       console.log('Дата у майбутньому');
//   }
// } else {
//   console.log('Друже, ти проспав!');
// }

// ============== Example ======================
// Приклад використання функцій та циклу while
// =============================================
// Запит коректного числового значення у користувача
// Створи функцію, що повертає число, що ввів користувач або null.
// Використай цикл while для запиту у користувача prompt(), корректного числа.
// Якщо користувач ввів некоректне значення:
// Виводиться повідомлення про те, що значення некоректне, та знову запитуеться число
// Якщо користувач натиснув "Скасувати":
// Виводиться повідомлення про скасування вводу користувачем та повертається null.
// Якщо введене значення, це корректне число: повертаеться введене числове значеня.

// const getNumericValue = message => {
//   while (true) {
//     const inputValue = prompt(message);
//     const isValidValue =
//       !isNaN(inputValue) && inputValue !== '' && inputValue !== null;

//     if (isValidValue) {
//       return Number(inputValue);
//     }

//     if (inputValue === null) {
//       alert('Скасування вводу.');
//       console.error('Скасовано користувачем');
//       return null;
//     }

//     alert('Введіть корректне число.');
//   }
// };

// ============== Example ======================
// Приклад використання циклу for
// =============================================
// Напиши цикл for, який виводить у консоль браузера
// числа за зростанням від min до max,
// але тільки, якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// ============== Example ======================
// Приклад використання циклу for
// =============================================
// Напиши цикл for, який виводить у консоль браузера
// числа за зростанням від min до max,
// але тільки, якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// ============== Example ======================
// Приклад використання циклу for
// =============================================
// Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі:
// "номер_елемента" - "значення_елемента"
// Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// // for (let i = 0; i < fruits.length; i += 1) {
// //   console.log(`${i + 1} - ${fruits[i]}`);
// // }

// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//   console.log(`${n} - ${fruits[i]}`);
// }

// ============== Example ======================
// Приклад використання циклу for та методу split
// =============================================
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,890055566377,890077832554';
// names = names.split(',');
// phones = phones.split(',');

// for (let i = 0; i < names.length, i < phones.length; i += 1) {
//   console.log(`${names[i]} - ${phones[i]}`);
// }

// ============== Example ======================
// Приклад використання циклу for (багатовимірні масиви)
// =============================================
// Перебір багатовимірного масиву та вивід у консоль кожного його елемента

// const array = [1, 'Hello', null, true, [1, [NaN, Infinity], 3, 4]];

// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   const isArray = Array.isArray(item);

//   if (isArray) {
//     for (let j = 0; j < item.length; j += 1) {
//       const subItem = item[j];
//       const isArray = Array.isArray(subItem);

//       if (isArray) {
//         for (let z = 0; z < subItem.length; z += 1) {
//           console.log('subItem z:', subItem[z]);
//         }
//         continue;
//       }
//       console.log('item j:', subItem);
//     }
//     continue;
//   }
//   console.log('arr i:', item);
// }

// ============== Example ======================
// Приклад використання циклу for (багатовимірні масиви)
// 1. Сортування масиву циклом
// 2. Використання методу: sort()
// =============================================
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']

// Метод бульбашка
// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21
// for (let i = 0; i < langs.length; i++) {
//   for (let j = 0; j < langs.length; j++) {
//     if (langs[j] > langs[j + 1]) {
//       const item = langs[j];
//       langs[j] = langs[j + 1];
//       langs[j + 1] = item;
//     }
//     console.log(langs);
//   }
// }
// console.log(langs);

// Сучасний варіант (метод sort())
// langs.sort((a, b) => a.localeCompare(b));
// console.log(langs);

// ============== Example ======================
// Приклад використання циклу for...of та тернарного виразу
// =============================================
// Зміни регістр кожної літери у рядку на протилежний
// Наприклад: якщо рядок "JavaScript" то на виході повинен бути рядок "jAVAsCRIPT".

// const string = 'JavaScript Is AweSOME!';
// let invertedString = '';

// for (const leter of string) {
//   const isInLowerCase = leter === leter.toLowerCase();
//   // if (isInLowerCase) {
//   //   console.log(`Find small: ${leter}`);
//   //   invertedString += leter.toUpperCase();
//   // } else {
//   //   invertedString += leter.toLowerCase();
//   // }
//   invertedString += isInLowerCase ? leter.toUpperCase() : leter.toLowerCase();
// }

// console.log('String:', string);
// console.log('Inverted String:', invertedString);

// ============== Example ======================
// Приклад використання циклу for...of
// =============================================
// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь - якого масиву чисел.
// Використовуй цикл for...of для розв'язання задачі.

// const numbers = [94, 2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // Робимо припущення, що мінімальне число - це перший елемент масиву.

// for (const value of numbers) {
//     if (value < min) {
//         min = value;
//     }
// }

// console.log(min); // 1

// ============== Example ======================
// Масиви та рядки
// Використання методів: split(), reverse(), join()
// =============================================
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);

// ============== Example ======================
// Функції, псевдомасив arguments, операція rest та оператор spread
// =============================================
// Напиши функцію підрахунку довільної к-сті чисел.

// // const add = function () {
// //   console.log(arguments);
// //   const args = Array.from(arguments); // const args = [...arguments]; // spread (розпилюємо масив)
// //   let total = 0;

// //   for (const arg of args) {
// //     total += arg;
// //   }

// //   return total;
// // };

// const add = function (...args) { // rest (збираемо аргументи у масив)
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(120, 777, 323, 80));

// ============== Example ======================
// Функції, операція rest
// Перевірка входження значення у масив
// =============================================
// Напиши функцію filterNumbers(array [, number1, ...]) яка:
// - першим аргументом приймає массив чисел,
// - після першого аргументу, може бути довільна к-сть інших аргументів, які будуть числами.
// Функція повинна повернути новий масив,
// у якому будуть тільки ті аргументи, починаючи з другого,
// для яких є аналог в оригінальному масиві.

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const duplicateEl = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       duplicateEl.push(element);

//       console.log(`Елемент: ${element} є у масиві!`);
//     }
//   }

//   return duplicateEl;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// ============ Example*(рекурсія) =============
// Функції, arguments, spread, рекурсивна функція
// Пошук найбільшого елемента
// =============================================
// Напиши функцію findLargestNumber(numbers) яка шукає найбільше число з чисел переданих в якості аргументів.

// Простий варіант (передаються лише числа)
// function findLargestNumber(...arr) {
//   console.log(arr);
//   // // // const arr = Array.from(arguments)
//   // // const arr = [...arguments];
//   let max = arr[0];

//   for (const num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83

// Завдання з жирною зірочкою
// рекурсія (всередині можуть бути інші масиви)
// function findLargestNumber() {
//   let max;

//   for (const num of arguments) {
//     if (typeof num === 'number') {
//       max = num;
//       break;
//     }
//   }

//   for (const num of arguments) {
//     if (typeof num === 'number') {
//       if (num > max) {
//         max = num;
//       }
//     } else {
//       // [[1, 143], 5, 7] => [1, 143], 5, 7
//       max = findLargestNumber(...num);
//       // //[1, 143] => 1, 143
//       // max = findLargestNumber(...num); // 143
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([[1, 143], 5, 7], 6, 7, 899, 88, 123));

// ============ Example*(рекурсія) =============
// Функції, arguments, spread, рекурсія
// ================================================
// Перебір багатовимірного масиву та вивід у консоль кожного його елемента

// const array = [1, 'Hello', true, [1, [NaN, Infinity], 3, 4]];

// function showEachArgument() {
//   for (const element of arguments) {
//     const isArray = Array.isArray(element);

//     if (isArray) {
//       showEachArgument(...element);
//     } else {
//       console.log(element);
//     }
//   }
// }

// showEachArgument(array);

// // for (let i = 0; i < array.length; i += 1) {
// //   const item = array[i];
// //   const isArray = Array.isArray(item);

// //   if (isArray) {
// //     for (let j = 0; j < item.length; j += 1) {
// //       const subItem = item[j];
// //       const isArray = Array.isArray(subItem);

// //       if (isArray) {
// //         for (let z = 0; z < subItem.length; z += 1) {
// //           console.log('subItem z:', subItem[z]);
// //         }
// //         continue;
// //       }
// //       console.log('item j:', subItem);
// //     }
// //     continue;
// //   }
// //   console.log('arr i:', item);
// // }

// =====================================
// === Функція для генерації id ========
// =====================================
// function createUniqueID() {
//   return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
// }

/*
 * =============== Shopping Cart ================
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

//? Розв'язок
// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//       id: crypto.randomUUID(),
//     };

//     items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { quantity, price } of items) {
//       total += quantity * price;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName && item.quantity <= 1) {
//         this.remove(productName);
//       } else if (item.name === productName) {
//         item.quantity -= 1;
//       }
//     }
//   },
// };

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// cart.remove('🍎');

/*
 * Деструктуризация массивов
 */

// // const rgb = [255, 100, 80];
// // const [red, green, blue] = rgb;
// // console.log(red, green, blue); // 255, 100, 80

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);
// console.log(entries);
// // ур3
// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;
//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/*
 * Деструктуризація об'єкта
 * - Значення за замовчуванням
 * - Ім'я змінної відмінне від імені властивості
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { rating, tracks, name, trackCount: numberOfTracks = 0, author = 'user' } = playlist;

// console.log(numberOfTracks);

/*
 * Глубока деструктуризація
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Паттерн «Об'єкт налаштувань»
 * - деструктуризація параметра-об'єкта в підписі функції
 * - rest при деструктуризації в підписі
 */

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);
