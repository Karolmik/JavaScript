// ZADANIE 1 
// let iife = (function () {
//     let var1 = 7;

//     function setValue() {
//         return var1;
//     }

//     function showValue() {
//         if (var1 === undefined) {
//             let text = "brak wartości "
//             return text
//         } else return var1;
//     }

//     function reverseValue() {

//         if (typeof var1 == 'string') {
//             let var2 = var1.split('');
//             let reverseVar1 = var2.reverse().join('');
//             return reverseVar1;
//         }
//         if (typeof var1 == 'number') {
//             var3 = var1 * (-1);
//             return var3;

//         }
//     }

//     return {
//         setValue,
//         showValue,
//         reverseValue
//     };
// })();

// console.log(iife);
// console.log(iife.setValue());
// console.log(iife.showValue());
// console.log(iife.reverseValue());


// zadanie 2 
// let sum;

// function add(x, y) {
//     sum = x + y;
//     return sum;
// }

// function sub(x, y) {
//     sum = x - y;
//     return sum;
// }

// function multi(x, y) {
//     sum = x * y;
//     return sum;
// }

// function div(x, y) {
//     sum = x / y;
//     return sum;
// }
// let obj = {
//     x: 3,
//     y: 4,
//     setOperation: function (val) {
//         if (val == add) {
//             let value = add(this.x, this.y)
//             return value
//         }
//         if (val == sub) {
//             let value = sub(this.x, this.y)
//             return value
//         }
//         if (val == multi) {
//             let value = multi(this.x, this.y)
//             return value
//         }
//         if (val == div) {
//             let value = div(this.x, this.y)
//             return value
//         }
//     }
// }
// console.log(obj.setOperation(add));
// console.log(obj.setOperation(sub));
// console.log(obj.setOperation(multi));
// console.log(obj.setOperation(div));



// zadanie 3
// let arr = [{
//     x: 2,
//     y: 3
// }, {
//     x: -1,
//     y: 6
// }, {
//     x: 0,
//     y: 8
// }];
// let obj = {
//     x: 3,
//     y: 4,
//     add: function () {
//         return this.x + this.y;
//     }
// }
// console.log(obj.add.call(arr[0]));
// console.log(obj.add.call(arr[1]));
// console.log(obj.add.call(arr[2]));

// };
// console.log(obj.add());
// let new = obj.add.bind(arr[0]);


// let sum = arr.reduce((a, b) => {
//     x: x + y
// });
// return sum;

// console.log(sum);