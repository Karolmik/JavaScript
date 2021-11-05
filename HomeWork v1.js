// ZADANIE 1
// let years = [1974, 1900, 1985, 2000];
// let year;
// for (let i = 0; i < years.length; i++) {
//   year = years[i];
// //   Rok przystępny występuje gdy liczba jest podzielna przez 4 lub przez 100 i 400 jednocześnie 
//   if ((year % 400 === 0 || year % 100 !== 0 ) && year % 4 === 0 ) {
//     console.log(year);
//   }
// }


// ZADANIE2  Oblicz silnie z 7
// let n=1;
// let result =1;
// while(n<=7){
//     result = result * n;
//     n++;
// }
// console.log(result);


// ZADANIE 3  SUMA LICZB NIEPARZYSTYCH
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let result = 0;

// for (i = 0; i < items.length; i++) {

//     if (items[i] % 2 != 0)
//         result += items[i]
// }

// console.log(result);


// ZADANIE 4
// MAKSYMALNA WARTOŚĆ
// let vali = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
// let max = vali[0];
// for (i = 0; i < vali.length; i++) {
//     if (vali[i] >= max)
//         max = vali[i];
// }
// console.log(max);

// // MINIMALNA WARTOŚĆ
// let vali = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
// let min = vali[0];
// for (i = 0; i < vali.length; i++) {
//     if (vali[i] <= min)
//         min = vali[i];
// }
// s
// console.log(min);




// ZADANIE 5
// let array = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];

// let longString = array[0];
// for (i = 0; i < array.length; i++) {
//     if (array[i].length >= longString.length)
//         longString = array[i];

// }
// console.log(longString);




// ZADANIE 6 WYBIERZ WSZYSTKIE INDEKSY Z TABLICY, KTÓRE POSIADAJĄ NAJWYŻSZĄ WARTOŚĆ 
let vali = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
let max = 0;
for (i = 0; i < vali.length; i++) {
    if (max <= vali[i])
        max = vali[i]
}

for (n = 0; n < vali.length; n++) {

    if (vali[n] == max)
        console.log(n);

}


// ZADANIE 7  Oblicz srednią wartość wszystkich liczb parzystych
// let vali = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
// let evenNumber = 0;
// n = 0;
// for (i = 0; i < vali.length; i++) {
//     if (vali[i] % 2 === 0) {
//         evenNumber = evenNumber + vali[i]
//         n++
//     }
// }
// console.log((evenNumber / n).toFixed(1));



// ZADANIE 8 obliczanie sredniej wartości liczb o indeksie parzystym 

// let vali = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
// let average = 0;
// let n = 0;
// for (i = 2; i < vali.length; i++) {
//     if (i % 2 == 0) {
//         average = average + vali[i]
//         n++
//     }
// }
// console.log(average / n);


// ZADANIE 9  DODAWANIE PARZYSTYCH, ODEJMOWANIE NIEPARZYSTYCH
// let vali = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
// let sum = 0;

// for (i = 0; i < vali.length; i++)
//     if (vali[i] % 2 == 0)
//         sum = sum + vali[i];
//     else {
//         sum = sum - vali[i]
//     }
// console.log(sum);