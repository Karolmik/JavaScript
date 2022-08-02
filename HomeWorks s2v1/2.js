class Player {
	constructor(min, max) {
		this.min = min
		this.max = max
		this.guessedNumber = min
	}
	makeAGues() {
		return Math.floor(Math.random() * (max - min + 1)) + this.min
	}
	analyseTheAnswer(answer) {
		if (answer === -1) this.min = this.guessedNumber + 1
		if (answer === 1) this.max = this.guessedNumber - 1
		//change min max on finish the game
	}
}

class Host {
	constructor(min, max) {
		this.min = min
		this.max = max
		this.secretNumber = 0
	}

	makeANumber() {
		this.secretNumber = Math.floor(Math.random() * (max - min + 1)) + this.min
	}
	checkAnswer(answer) {
		let result
		if (answer < this.secretNumber) return -1
		if (answer === this.secretNumber) return 0
		if (answer > this.secretNumber) return 1
	}
}

class Game {
	constructor(host, player) {
		this.host = host
		this.player = player
	}

	start() {
		console.log('Game start')
		this.host.makeANumber()

		while (true) {
			let guessedNumber = this.player.makeAGues()
			let answer = this.host.checkAnswer(guessedNumber)
			if (answer === 0) {
				console.log('Game finished')
				return
			}
			this.player.analyseTheAnswer(answer)
		}
	}
}
const min = 0
const max = 100

let game = new Game(new Host(min, max), new Player(min, max))
game.start()
