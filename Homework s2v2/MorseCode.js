const morseCode = {
	a: '.-',
	b: '-...',
	c: '-.-.',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--.',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	0: '-----',
	' ': '/',
}
let reverseMorseCode = (function () {
	let getReverseMorseCode = {}
	for (let i = 0; i < 37; i++) {
		let newValues = Object.keys(morseCode)[i]
		let newKeys = Object.values(morseCode)[i]
		getReverseMorseCode[newKeys] = newValues
	}
	return getReverseMorseCode
})()
console.log(reverseMorseCode)

class Translator {
	constructor(text, translateMethod, typeOfInput) {
		this.text = text
		this.translateMethod = translateMethod
		this.typeOfInput = typeOfInput
	}
	translate() {
		return this.translateMethod(this.text, this.typeOfInput)
	}
}

class TranslateMethods {
	static fromEnglishToMorseCode(text, typeOfInput) {
		let translatedText = ''
		let newtext = text.toLowerCase()
		newtext.split('').forEach(element => {
			if (typeOfInput[element]) {
				translatedText += ' ' + typeOfInput[element]
			}
		})
		return translatedText
	}

	static fromMorseCodeToEnglish(text, reverseMorseCode) {
		let translatedText = ''
		text.split(' ').forEach(element => {
			if (reverseMorseCode[element]) {
				translatedText += ' ' + reverseMorseCode[element]
			}
		})
		return translatedText
	}
}
let fromEngToMorseWord = new Translator('Hello World', TranslateMethods.fromEnglishToMorseCode, morseCode)
let result = fromEngToMorseWord.translate()
console.log(result)

let fromMorseToEngWord = new Translator(
	'.... . .-.. .-.. --- / .-- --- .-. .-.. -..',
	TranslateMethods.fromMorseCodeToEnglish,
	reverseMorseCode
)
let result2 = fromMorseToEngWord.translate()
console.log(result2)
