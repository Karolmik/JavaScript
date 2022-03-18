// ------------------------ Guessing Game ----------------------------

let secretNumber = Math.floor(Math.random() * 100) + 1

function guessingGame() {
	let max = 100
	let min = 1
	let guessedNumber = Math.floor(Math.random() * (max - min + 1)) + min
	let count = 0

	while (guessedNumber !== secretNumber) {
		if (guessedNumber > secretNumber) {
			console.log(`Liczba ${guessedNumber} liczba jest zbyt duża`)
			max = guessedNumber
			guessedNumber = Math.floor(Math.random() * (max - min + 1)) + min
			if (max != guessedNumber) count += 1
		} else if (guessedNumber < secretNumber) {
			console.log(`Liczba ${guessedNumber} jest za mała! `)
			min = guessedNumber
			guessedNumber = guessedNumber = Math.floor(Math.random() * (max - min + 1)) + min
			if (min != guessedNumber) count += 1
		}
	}
	if (guessedNumber === secretNumber) {
		count += 1
		console.log(`Trafiłeś! Szukana Liczba wynosi ${secretNumber}! Liczba prób:${count}`)
	}
}
guessingGame()
// console.log(number)
