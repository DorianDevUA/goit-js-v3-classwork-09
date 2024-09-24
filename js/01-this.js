/*
 * Функція це окремий випадок об'єкта -> СКЛАДНИЙ ТИП, передача по посиланню
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Де та як була оголошена функція НЕ МАЄ НІЯКОГО ВПЛИВУ на контекст.
 *    - Контекст визначається У МОМЕНТ ВИКЛИКУ ФУНКЦІЇ, якщо він не прив'язаний явно.
 */

/*
 * Як метод об'єкта. У контексті об'єкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

/*
 * Виклик без контексту
 * - У суворому режимі = undefined
 * - Не у суворому режимі = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Як метод об'єкту, але оголошена як зовнішня функція.
 * У контексті об'єкта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

/*
 * Виклик без контексту, але оголошена як метод об'єкту.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в callback-функціях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/*
 *"Стрілкові функції"
 * У стрілочних функцій свого контексту виконання немає.
 * Вони пов'язуються з найближчим за ієрархією контекстом, де він визначений.
 * Це зручно, коли нам потрібно передати в стрілочну функцію,
 * наприклад батьківський контекст без використання bind().
 */

// function greetWaitAndAgain() {
//   console.log(`Hello, ${this.name}!`);
//   setTimeout(() => {
//     console.log(`Hello again, ${this.name}!`);
//   }, 1000);
// }

// const user = { name: 'Alex' };

// user.greetWaitAndAgain = greetWaitAndAgain;
// user.greetWaitAndAgain();

// // Hello, Alex!
// // Hello again, Alex!

/*
 * При використанні звичайної функції всередині контекст би загубився, і щоб досягти
 * того ж результату, нам би довелося використовувати call(), apply() або bind().
 */

/*
 * Тренуємося 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Какой this ???

/*
 * Тренуємося 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

/*
 * Тренуємося 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // Какой this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // Какой this ???

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

/*
 * Тренуємося 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this ???

// const hat = {
//     color: 'blue',
//     updateColor: updateColor,
// };

// hat.updateColor('orange'); // Какой this ???

/*
 * Тренуємося 5
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);
