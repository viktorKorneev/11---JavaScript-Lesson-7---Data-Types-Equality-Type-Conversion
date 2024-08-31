// const a = 'hellow'
// console.log(typeof a);

// const checkType = (w) => {
//   return typeof w;
// };
// console.log(checkType('4'));

// const person = {
//   name: "Alice",
//   age: 30,
//   isEmployed: true,
// };

// const logPerson = (person) => {
//   for (i in person) {
//     console.log(typeof person[i]);
//   }
// };

// console.log(logPerson(person));

// const isString = (value) => {
// return typeof value === "string"
// }
// console.log(isString('3'));
// a.property

// let a = {}
// console.log(a.property);

// let a;
// let b = 100200;
// const foo = (val) => {
//   if (val === undefined) {
//     console.log("let is undefind");
//   } else {
//     console.log("var is DEFINED");

//   }
// };

// foo(a);
// foo(b);

// let a = null
// console.log(typeof a);

// let a = 5
// let b = "5"
// let c = a + b
// console.log( 0 / 0);

// const arr = [1, undefined, 4, undefined, 5]
// const foo = (arr) => {
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === undefined){
//             count++
//         }
//     }
//     return count
// }
// console.log(foo(arr));

// const obj = { a: null, b: 2, c: null }
// const foo = (obj) => {
//     for(const i in obj){
//         if(obj[i] === null){
//             obj[i] = "No value"
//         }
//     }
//     return obj
// }

// console.log(foo(obj));

// console.log(Number.isFinite(33));

// const a = 5;
// const b = "5";
// // console.log(a == b);

// const foo = () => {
//     return typeof a === b ? true : false
// }
// console.log(foo(a, b));

// const isNullOrUndefined = (value) =>{
// if (value == null || value == undefined){
//     return true
// }
//  }
// console.log(isNullOrUndefined(null));

// console.log(null==undefined);

// let obj1 = [1,2,3]
// let obj2 = [1,2,3]
// console.log(obj1==obj2);

// console.log("5" > 3);

// const foo = (val) => {
//     return String(val)
// }
// console.log(foo(345));

// const foo2 = (val) => {
//     return Number(val)
// }
// console.log(foo('345'));

// const foo =(val)=>{
//     if(val){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(foo());

// const arr = ["hello", "world"];

// const foo = (arr) => {
//   return arr.map((el) => el.toUpperCase());
// };

// console.log(foo(arr));


// slice
// •    Назначение: Извлекает часть массива и возвращает новый массив.
// •    Изменяет оригинальный массив: Нет, slice не изменяет исходный массив.
// •    Аргументы:
// •    start: начальный индекс (включительно).
// •    end: конечный индекс (не включая).
// const array = [1, 2, 3, 4, 5];
// const sliced = array.slice(1, 4);
// console.log(sliced);
// splice
// •    Назначение: Изменяет содержимое массива, удаляя или добавляя элементы.
// •    Изменяет оригинальный массив: Да, splice изменяет исходный массив.
// •    Аргументы:
// •    start: начальный индекс для изменения.
// •    deleteCount: количество элементов для удаления.
// •    items: элементы для добавления (необязательно).

// const array = [1, 2, 3, 4, 5];
// const spliced = array.splice(1, 2, 'a', 'b');
// console.log(array);
// console.log(spliced);

// const array = [1, 2, 3, 4, 5, 6, 7];
// const spliced = array.splice(5, 2, 66, 77);
// console.log(array);
// console.log(spliced);

https://www.youtube.com/watch?v=p-OJNaEdGDY&t=9s

https://www.youtube.com/playlist?list=PLyJqTD4cwIqPmveghTVn-SHNVrQlwWSDU



