/*
Manipulação de Arrays:
Crie uma função que receba um array de números e retorne a soma de todos os elementos.
Implemente uma função para encontrar o maior elemento em um array.
Desenvolva um método para remover elementos duplicados de um array.
*/

function sumPhone_Numbers(arrayNumbers) {
	if (arrayNumbers.lenght === 0) {
		return null;
	} else {
		const sum = arrayNumbers.reduce((acc, num) => acc + num, 0);
		const biggestValue = Math.max(...arrayNumbers);
		const removeDuplicated = new Set(arrayNumbers);
		const removedDuplicate = [...removeDuplicated];
		return { sum, biggestValue, removedDuplicate };
	}
}

const callTheFunction = sumPhone_Numbers([2, 2, 3, 4, 4, 4, 5, 20]);
// console.log(callTheFunction);

const arrayObject = {
	array: [],
	removeElements_two(param) {
		console.log([...new Set(param)]);
	},
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10, 12, 18, 18];
console.log((arrayObject.array = numbers));
arrayObject.removeElements_two(arrayObject.array)