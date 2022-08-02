let word = '45vv65g245gggg2405o2'

function listOfDigits(word) {
	let digits = word.toString().split('').map(Number)
	for (i = 0; i < digits.length; i++) {
		if (isNaN(digits[i])) {
			digits.splice(i, 1)
			i--
		}
	}
	return digits
}
console.log(listOfDigits(word))
