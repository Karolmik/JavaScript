
                                            // POKER GAME 


let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades' ];
let values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
let score = [2,3,4,5,6,7,8,9,10,11,12,13,14]
let deck = new Array();

let getDeck = (function(values,suits,score){
    for (let i = 0; i < suits.length; i++){
        for (let x = 0 ; x < values.length; x++){
            let card = {Value: values[x], suit: suits[i],score: score[x]};
            deck.push(card);
            }
    }
return deck;
})(values,suits,score)


// Rozdanie 5 kart 
let hand = new Array();

for (let i = 0 ; i < 5 ; i++){
    let randomNumber = Math.floor(Math.random()*deck.length)
    let card = deck[randomNumber]
    hand.push(card);
    deck.splice(randomNumber,1);
};

// funkcja sortująca karty według ich wartości 
function sortHandByScore(a,b){
    return a.score - b.score
}

// Sortowanie 
hand.sort(sortHandByScore)

// Wypisanie posiadanych kart 
for (let i =0; i< hand.length; i ++){
    console.log(hand[i]);
}

// Sprawdzenie !
// hand = [{Value: 2, suit: 'Spades', score: 4},
// {Value: 3, suit: 'Hearts', score: 2},
// {Value: 4, suit: 'Spades', score: 10},
// {Value: 5, suit: 'Spades', score: 7},
// {Value: 'King', suit: 'Spades', score: 13}]

// Funkcja sprawdzająca czy posiadane karty są w jednakowym kolorze
function checkSameSuit(){
    for(let i = 1; i < hand.length; i++)
    {
        if (hand[i].suit !== hand[0].suit)
        return false; 
    }
    return true;
}

checkSameSuit();

// Funkcja sprawdzająca karty o jednakowej wartości 
function checkSameScore(num){
    let count = 0;
    for (let i= 0; i<hand.length; i ++){
        if(hand[i].score === num ) {
        count++
        }
    }
return count;
}
//  Funckcja sprawdzająca sekwencję straight
function checkSequence(){
     for (let i = hand.length - 1;i >0 ;i--){

        if ((hand[i].score - hand[i-1].score) !== 1 ){
            return false;
        }
     }
 return true;
}

// Sprawdzenie Royal Flush 
let royalFlush = [10,11,12,13,14];
let royal = 0;
function checkRoyalFlushScore(){
    for (let i = 0; i < hand.length; i ++){
        if(royalFlush.includes(hand[i].score)){
            royal ++
        }
    }
    return royal; 
}

function checkRoyalFlush(){

    
    if (checkRoyalFlushScore() === 5 && checkSameSuit() === true){
        return true;
    } 
    else return false;
}

// Funkcja sprawdzająca Staright Flush 

function checkStraightFlush(){
    if (checkSequence() && checkSameSuit() == true){
        return true;
    }
    else return false; 
}

// Funckja sprawdzająca Four of a Kind

function checkFourKind(){
 for (let i = 0; i < hand.length;i++){
     if (checkSameScore(hand[i].score) == 4 ){
         return true;  
     }   
 }
 return false; 
}
//  Funkcja sprawdzająca Full House 

function checkFullHouse(){
    if (checkThreeOfKind() && checkPair() == true){
        return true;
    }else return false;
}

// Funkcja sprawdzająca flush (kolor)
function checkFlush(){
if (checkSameSuit() == true){
    return true;
} 
else return false;
}

// Funkcja sprawdzająca Straight 
function checkStaright(){
    if (checkSequence() == true){
        return true;
    }
    else return false;
}

// Funkcja sprawdzająca Three of a Kind
function checkThreeOfKind(){
    for (let i = 0; i < hand.length;i++){
        if (checkSameScore(hand[i].score) == 3 ){
            return true;  
        }   
    }
    return false; 
}

// Funkcja sprawdzająca Two Pairs
function checkTwoPairs(){
    let n = 0;
    let pair = 0;
    while (n<hand.length-1){
        for (let i=n+1; i<hand.length; i++){
            if (hand[n].score == hand[i].score){
                pair ++;
            }
        }
        n++;
    }
    if (pair == 2){ return true}
    else return false;

}
// Funckja sprawdzająca Pair 
let n;
function checkPair(){
    for (let i = 0; i < hand.length;i++){
        if (checkSameScore(hand[i].score) == 2 ){
            n = i;
            return (n, true); 
        }   
    }
    return false;
}

// Funkcja wyświetlająca najwyższą posiadaną kartę

function highCard(){
    console.log(`Your highest card is ${hand[4].Value} ${hand[4].suit}`); 
}

switch(true){
    case checkRoyalFlush():
        console.log("Your highest hand is Royal Flush !");
        break;
    case checkStraightFlush():
        console.log("Your highest hand is Straight Flush !");
        break;
    case checkFourKind():
        console.log("Your highest hand is Four of a Kind !");
        break;
    case checkFullHouse():
        console.log("Your highest hand is Full House ! ");
        break;
    case checkFlush():
        console.log("Your highest hand is Flush !");
        break;
    case checkStaright():
        console.log("Your highest hand is Straight ! ");
        break;
    case checkThreeOfKind():
        console.log("Your highest hand is Three of a Kind ! ");
        break;
    case checkTwoPairs():
        console.log("Your highest hand is Two Pairs ! ");
        break;
    case checkPair():
        console.log("Your highest hand is Pair of " + hand[n].Value + "!");
        break;
    default:highCard() ;
}   


