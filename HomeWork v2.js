// ## 1
// const array = [1, 6, 23, 8, 4, 8, 3, 7];

// var sum = array.reduce(function (a, b) {
//     return a + b;
// }, 0);
// console.log(sum);

// const array = [1, 6, 23, 8, 4, 8, 3, 7];

// let sum = array.reduce((a, b) => a + b, 0);
// console.log(sum);


// ##2
// const array = [1, 6, 23, 8, 4, 8, 3, 7];

// function sumOfFirstAndLastIndex(a, b) {

//     let sum = a + b;

//     return sum;

// }
// console.log(sumOfFirstAndLastIndex(array[0], array[array.length - 1]));


// ##3

// function factorial(a) {

//     let i = 1;
//     let result = 1;
//     while (i <= a) {
//         result = result * i
//         i++;
//     }
//     return result
// }
// console.log(factorial(5));

// ##4
// const array = [1, 6, 23, 8, 4, 8, 3, 7];

// function reverseArray(input) {
//     let arr = [];
//     for (i = input.length - 1; i >= 0; i--) {
//         arr.push(input[i]);
//     }
//     return arr;
// }
// console.log(reverseArray(array));

// ##5
// const array = [1, 3, 4, 1, 0, 3];

// function newArray(input) {
//     let arr = [];
//     let a = 0;
//     for (i = 0; i < input.length; i = i + 2) {
//         arr[a] = input[i] + input[i + 1];

//         a++;
//     }
//     return arr;
// }
// newArray(array);

// ##6

// const array = [1, 3, 4, 1, 0];
// array.push(array[array.length - 1]);

// function newArray(input) {
//     let arr = [];
//     let a = 0;
//     for (i = 0; i < input.length; i = i + 2) {
//         arr[a] = input[i] + input[i + 1];

//         a++;
//     }
//     return arr;
// }
// newArray(array);

// ##7
// const array = [1, 6, 23, 8, 4, 8, 3, 7];
// let num = (array[Math.floor(Math.random() * 8)])
// return num;

// ## 8
// const array = [1, 6, 23, 8, 4, 8, 3, 7];

// function lowestRandomNumber(a, b) {
//     let newTab = [];
//     let n = 0;
//     let i = 1;
//     while (i <= b) {
//         let num = (array[Math.floor(Math.random() * array.length)]);
//         newTab[n] = num;
//         i++;
//         n++;
//     }

//     let lowestNumber = Math.min(...newTab);
//     return lowestNumber;
// }
// lowestRandomNumber(array, 3);
// console.log(object);

// ##9

// let array = [1, 6, 23, 8, 4, 8, 3, 7];
// let resultArray = [];


// function newArray(array) {
//     while (array.length > 0) {
//         let num = (array[Math.floor(Math.random() * array.length)]);
//         let i = array.indexOf(num);
//         resultArray.push(array[i]);
//         array.splice(i, 1);
//     }
//     return resultArray;
// }
// console.log(newArray(array));

// ## 10
// const array = [1, 6, 23, 8];
// const Tab = [-1, 1];

// function addOrSubstractElements(array) {
//     let sum = array[0];
//     let i = 1;
//     while (i < array.length) {
//         let num = (Tab[Math.floor(Math.random() * Tab.length)]);
//         sum += array[i] * num;
//         i++;
//     }
//     return sum;
// }
// addOrSubstractElements(array);

// ## 11

// const now = new Date();
// let dayOfWeek;
// const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
// dayOfWeek = `Dzisiaj jest " : ${days[now.getDay()]}`
// console.log(dayOfWeek);


// ## 12

const now = new Date();
let todayDay = now.getDay();
if (todayDay <= 5) {
    let daysToFriday = "Pozostało " + (5 - todayDay) + " dni do piątku";
    console.log(daysToFriday);
} else console.log("Pozostało 6 dni do piątku");












// let dayOfTheWeek = "Monday";

// switch (dayOfTheWeek) {
//     case "Monday":
//         console.log('Poniedziałek');
//         break;
//     case "Tuesday":
//         console.log('Wtorek');
//         break;
//     case "Wednesday":
//         console.log('środa');
//         break;
//     case "Thursday":
//         console.log('Czwartek');
//         break;
//     case "Friday":
//         console.log('Piątek');
//         break;
//     case "Saturday":
//         console.log('Sobota');
//         break;
//     case "Sunday":
//         console.log('Niedziela');
//         break;
// }
// console.log(
//     switch (dayOfTheWeek));







// let num = Math.min(...array);
// return num;













// function sumOfArray(x, y) {
//     let sum;
//     sum = x + y
//     console.log(sum);
// }
// console.log(sumOfArray(array[1], array[7]));

// function sumOfAllIndexes(...sum) {
//     let result = 0;
//     for (i = 0; i < sum.length; i++) {
//         result += sum[i];
//     }
//     return result;
// }
// const sumOfArray = addAllArrayIdexes(array);