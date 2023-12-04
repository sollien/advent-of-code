const fs = require('fs')
let input = fs.readFileSync("./input.txt", "utf-8").split("\n")

input = input.map(line => line
	.replace(/one/g, "o1e")
	.replace(/two/g, "t2o")
	.replace(/three/g, "t3e")
	.replace(/four/g, "f4")
	.replace(/five/g, "f5e")
	.replace(/six/g, "s6")
	.replace(/seven/g, "s7n")
	.replace(/eight/g, "e8t")
	.replace(/nine/g, "n9e")
)

const sumList = []

for (let i = 0; i < input.length; i++) {
	const numbersInString = input[i].match(/\d/g)

	if (numbersInString) {
		const stringToInt = numbersInString.map(match => parseInt(match, 10))

		if (stringToInt.length === 1) {
			const concatenatedNumbers = parseInt(stringToInt[0].toString() + stringToInt[0].toString(), 10)

			sumList.push(concatenatedNumbers)
		} else {
			const firstNumber = stringToInt[0]
			const lastNumber = stringToInt[stringToInt.length - 1]
			const concatenatedNumbers = parseInt(firstNumber.toString() + lastNumber.toString(), 10)

			sumList.push(concatenatedNumbers)
		}
	}
}

const sum = sumList.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)

console.log(sum)