class Translator {
	constructor(text, translateMethod) {
		this.text = text
		this.translateMethod = translateMethod
	}
	Translate() {
		return this.translateMethod(this.text)
	}
}
class TranslationsEngine {
	ToPigLatin(text) {
		let newtext = text.split(' ').map(word => {
			let letters = word.split('')
			let firstLetter = letters.shift(0)
			let pigWord = letters.join('') + firstLetter + 'ay'
			return pigWord
		})
		newtext = newtext.join(' ')
		// accual code transformation
		return text, newtext
	}
	ReverseFromPigLatin(text) {
		let newtext = text.split(' ').map(word => {
			let letters = word.split('')
			let deleteAy = letters.splice(letters.length - 2, 2)
			let lastLetter = letters.splice(letters.length - 1)
			let englishWord = lastLetter + letters.join('')
			return englishWord
		})
		newtext = newtext.join(' ')
		// accual code transformation
		return text, newtext
	}
}
let translationEngine = new TranslationsEngine()
let toPigLatinTranslator = new Translator('The quick brown fox', translationEngine.ToPigLatin)
console.log(toPigLatinTranslator.Translate())
let fromPigLatinToEnglish = new Translator('Hetay uickqay rownbay oxfay', translationEngine.ReverseFromPigLatin)
console.log(fromPigLatinToEnglish.Translate())
