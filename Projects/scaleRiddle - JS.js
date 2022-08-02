                                   // Scale riddle. With 8 balls  [1,2,1,1,1,1,1,1]. One of the items will be change to two.
                                      //  Indexes are to be chosen at random. Use comparing of weights only two times.


let array = [1, 2, 1, 1, 1, 1, 1, 1]
let i = 0;
let newArray = [];

array.forEach(element => {
    newArray.push({
        number: element,
        primaryIndex: i
    });
    i++;
});

const leftBallArray = [],
    rightBallArray = [];
let sumLeft = 0,
    sumRight = 0;

// Losowanie pierwszych 3 liczb które trafią do lewej tablicy 

for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * newArray.length);
    let leftBall = newArray[randomNumber];
    leftBallArray.push(newArray[randomNumber]);
    newArray.splice(randomNumber, 1);
    sumLeft += leftBall.number;
}

// Losowanie kolejnych 3 liczb które trafią do prawej tablicy

for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * newArray.length);
    let rightBall = newArray[randomNumber];
    rightBallArray.push(newArray[randomNumber]);
    newArray.splice(randomNumber, 1);
    sumRight += rightBall.number;
}
const Text = " Index of heavy ball is "

if (sumLeft == sumRight) {
    if (newArray[0].number > newArray[1].number) {
        console.log(Text + newArray[0].primaryIndex);
    } else {
        console.log(Text + newArray[1].primaryIndex);
    }
} else if (sumLeft > sumRight) {
    let randomNumber = Math.floor(Math.random() * leftBallArray.length);
    let firstLeftBall = leftBallArray[randomNumber];
    leftBallArray.splice(randomNumber, 1);
    randomNumber = Math.floor(Math.random() * leftBallArray.length);
    let secondLeftBall = leftBallArray[randomNumber];
    leftBallArray.splice(randomNumber, 1);

    if (firstLeftBall.number == secondLeftBall.number) {
        console.log(Text + leftBallArray.primaryIndex);
    } else if (firstLeftBall.number > secondLeftBall.number) {
        console.log(Text + firstLeftBall.primaryIndex);
    } else {
        console.log(Text + secondLeftBall.primaryIndex);
    }
} else {
    if (sumLeft < sumRight) {
        let randomNumber = Math.floor(Math.random() * rightBallArray.length);
        let firstRightBall = rightBallArray[randomNumber];
        rightBallArray.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * rightBallArray.length);
        let secondRightBall = rightBallArray[randomNumber];
        rightBallArray.splice(randomNumber, 1);

        if (firstRightBall.number == secondRightBall.number) {
            console.log(Text + rightBallArray.primaryIndex);
        } else if (firstRightBall.number > secondRightBall.number) {
            console.log(Text + firstRightBall.primaryIndex);
        } else(console.log(Text + secondRightBall.primaryIndex));
    }
}