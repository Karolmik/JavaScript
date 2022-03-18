// let arr = [1, 2, 3, 4, 5, 6, 7]

function rotate(k, n) {
	let arr = []
	for (i = 1; i <= k; i++) {
		arr.push(i)
	}
	for (i = 0; i < n; i++) {
		arr.push(arr[i])
	}
	for (i = 0; i < n; i++) {
		arr.shift()
	}

	console.log(arr)
}
rotate(10, 4)
