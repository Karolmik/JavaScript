// zadanie 1
// function reverseString(str){
// return str.split('').reverse().join('')
// }
// console.log(reverseString("karol"));

// zadanie 2 
//  function reverseNumber(num){
//      return parseFloat(num.toString().split('').reverse().join(''))*(-1)
//  }
//  console.log(reverseNumber(2345));

// zadanie 3 

let getData = function(){
    let dataFromJson = require("./Data.json");
    return dataFromJson;
}

let obj = {
data: getData().map((p) => p),
cost: getData().map((p)=> p.cost),
detailsOfPayent : {
    type: getData().map((p)=>  p.detailsOfPayent.Type),
    company: getData().map((p)=> p.detailsOfPayent.company),
    date: getData().map((p)=> p.detailsOfPayent.date)
    }
}

let resultObject = {
    spendMoney: spendMoney,
    companyEarn: companyEarn,
    typeTransaction: typeTransaction,
    valEachMonth: valEachMonth,
    ValEachDay: ValEachDay
}

function spendMoney(){
let filter = obj.data.filter((p) => p.detailsOfPayent.date.slice(6) == '2014') ;
let sum = 0;
for(let i = 0; i<filter.length; i++){
sum = sum + parseFloat(filter[i].cost)
}
return console.log(`W 2014 roku łącznie wydano: ${sum.toFixed(2)}\n `);
}

function companyEarn(){
let filter = obj.data.filter((p)=> p.detailsOfPayent.company == 'ECSTASIA' || 
p.detailsOfPayent.company == 'MANGELICA' ||
p.detailsOfPayent.company == 'CODAX' )
let sumEcstasia = 0, sumMagnelica = 0, sumCodax =0;
 for (i=0; i<filter.length;i++){
     if (filter[i].detailsOfPayent.company == 'ECSTASIA'){
         sumEcstasia += parseFloat(filter[i].cost)
     }
     if (filter[i].detailsOfPayent.company == 'MANGELICA'){
        sumMagnelica += parseFloat(filter[i].cost)
    }
    if (filter[i].detailsOfPayent.company == 'CODAX'){
        sumCodax += parseFloat(filter[i].cost)
    }
 }
 return console.log(`Zarobki poszczególnych firm wynoszą kolejno: \n Ecstasia: ${sumEcstasia.toFixed(2)}\n Magnelica: ${sumMagnelica.toFixed(2)}\n Codax: ${sumCodax.toFixed(2)}\n`);
}

function typeTransaction(){
    let filter = obj.data.filter((p) => p.detailsOfPayent.Type <= 5)
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0; 
    let sum4 = 0;
    let sum5 =0;
    for (let i = 0; i<filter.length; i++){
        if( filter[i].detailsOfPayent.Type == 1){
            sum1 += parseFloat(filter[i].cost) 
        }
        if( filter[i].detailsOfPayent.Type == 2){
            sum2 += parseFloat(filter[i].cost) 
        }
        if( filter[i].detailsOfPayent.Type == 3){
            sum3 += parseFloat(filter[i].cost) 
        }
        if( filter[i].detailsOfPayent.Type == 4){
            sum4 += parseFloat(filter[i].cost) 
        }
        if( filter[i].detailsOfPayent.Type == 5){
            sum5 += parseFloat(filter[i].cost) 
        }
    }
    return console.log(`Suma wydatków poszczególnych typów transakcji wynosi odpowiednio: \n Typ 1: ${sum1.toFixed(2)}\n Typ 2: ${sum2.toFixed(2)}\n Typ 3: ${sum3.toFixed(2)}\n Typ 4: ${sum4.toFixed(2)}\n Typ 5: ${sum5.toFixed(2)}\n`)
}

function valEachMonth(){
let filter = obj.data.filter((p) => 1<= parseFloat(p.detailsOfPayent.date.slice(3,5))<= 12);
let sum1 = 0, sum2 = 0,sum3 = 0,sum4 = 0,sum5 = 0,sum6 = 0,sum7 = 0,sum8 = 0,sum9 = 0,sum10 = 0,sum11 = 0,sum12 = 0;

for (let i = 0; i<filter.length; i++){
    if (filter[i].detailsOfPayent.date.slice(3,5) == '01') {
        sum1 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '02') {
        sum2 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '03') {
        sum3 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '04') {
        sum4 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '05') {
        sum5 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '06') {
        sum6 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '07') {
        sum7 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '08') {
        sum8 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '09') {
        sum9 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '10') {
        sum10 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '11') {
        sum11 += parseFloat(filter[i].cost)
    }
    else if (filter[i].detailsOfPayent.date.slice(3,5) == '12') {
        sum12 += parseFloat(filter[i].cost)
    }
}
return console.log(`Wydatki w poszczególnych miesiącach:\n Styczeń: ${sum1.toFixed(2)}\n Luty: ${sum2.toFixed(2)}\n Marzec: ${sum3.toFixed(2)}\n Kwiecień: ${sum4.toFixed(2)}\n Maj: ${sum5.toFixed(2)}\n Czerwiec: ${sum6.toFixed(2)}\n Lipiec: ${sum7.toFixed(2)}\n Sierpień: ${sum8.toFixed(2)}\n Wrzesień: ${sum9.toFixed(2)}\n Październik: ${sum10.toFixed(2)}\n Listopad: ${sum11.toFixed(2)}\n Grudzień: ${sum12.toFixed(2)}\n`);
}


function parseToDate(dateInString) {
    dateInString = dateInString.split("-");
    return new Date(
      dateInString[2],
      Number.parseInt(dateInString[1]) - 1,
      dateInString[0]
    )
}

function ValEachDay(){
    let filter = obj.data.filter((p) => (p.detailsOfPayent.date))
    let sumSun =0, sumMon = 0, sumTue = 0, sumWed = 0, sumThur = 0, sumFri = 0, sumSat = 0;
    for (let i = 0; i<filter.length;i++ ){

        if ((parseToDate(filter[i].detailsOfPayent.date)).getDay() == 0){
            sumSun += parseFloat(filter[i].cost)
        }
        else if (parseToDate(filter[i].detailsOfPayent.date).getDay() == 1){
            sumMon += parseFloat(filter[i].cost)
        }
        else if (parseToDate(filter[i].detailsOfPayent.date).getDay() == 2){
            sumTue += parseFloat(filter[i].cost)
        }
        else if (parseToDate(filter[i].detailsOfPayent.date).getDay() == 3){
            sumWed += parseFloat(filter[i].cost)
        }
        else if (parseToDate(filter[i].detailsOfPayent.date).getDay() == 4){
            sumThur += parseFloat(filter[i].cost)
        }
        else if (parseToDate(filter[i].detailsOfPayent.date).getDay() == 5){
            sumFri += parseFloat(filter[i].cost)
        }
        else if (parseToDate(filter[i].detailsOfPayent.date).getDay() == 6){
            sumSat += parseFloat(filter[i].cost)
        }  
    } 
    return console.log(`Wydatki w poszczególnych dniach tygodnia: \n Niedziela :${sumSun.toFixed(2)}\n Poniedziałek :${sumMon.toFixed(2)}\n Wtorek :${sumTue.toFixed(2)}\n Środa :${sumWed.toFixed(2)}\n Czwartek:${sumThur.toFixed(2)}\n Piątek :${sumFri.toFixed(2)}\n Sobota :${sumSat.toFixed(2)}\n`);
}  
    
  
resultObject.spendMoney();
resultObject.companyEarn();
resultObject.typeTransaction();
resultObject.valEachMonth();
resultObject.ValEachDay();
