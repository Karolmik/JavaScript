let word = '45v65g245g2405o2'

function listOfDigits(word) {
	let digits = word.toString().split('').map(Number)
	for (i = 0; i < digits.length; i++) {
		if (isNaN(digits[i])) {
			digits.splice(i, 1)
		}
	}
	return digits
}
console.log(listOfDigits(word))
