let arr = [1, 1]
class Fibonacci {
	constructor(n, arr) {
		this.n = n
		this.arr = arr
	}

	getFibonacciNumber() {
		for (let i = 2; i < this.n; i++) {
			let number = arr[i - 2] + arr[i - 1]
			arr.push(number)
		}
		return this.arr
	}
}
let fib = new Fibonacci(10, arr)
console.log(fib.getFibonacciNumber())
