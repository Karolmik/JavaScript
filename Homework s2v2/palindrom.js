let text = 'karakis'

class Palindroms {
	constructor(text) {
		this.text = text
	}

	findPalindroms(text, i, k) {
		let wordsArr = []
		let word = ''
		while (i >= 0 && k < text.length) {
			if (text[i] != text[k]) {
				break
			}

			word = text.slice(i, k + 1)
			wordsArr.push(word)

			i--
			k++
		}
		return wordsArr
	}

	returnPalindroms() {
		let palindromArr = []
		for (let i = 0; i < this.text.length; i++) {
			let wordsArr = this.findPalindroms(this.text, i - 1, i + 1)
			palindromArr = palindromArr.concat(wordsArr)
			let wordsArr2 = this.findPalindroms(this.text, i, i + 1)
			palindromArr = palindromArr.concat(wordsArr2)
		}
		return palindromArr
	}
}

let palindrom = new Palindroms(text)
console.log(palindrom.returnPalindroms())
