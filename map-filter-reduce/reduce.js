/* Exercício 1 */
function sumNumbers(array) {
    return array.reduce((prev, current) => {
        return prev + current
    })
}

const numbers = [2 , 5, 1]

console.log(sumNumbers(numbers))

/* Exercício 2 */
function calculateBalance(balance, list) {
    return list.reduce(function (prev, current) {
        return prev - current.price
    }, balance)
}

const list = [
    { name: 'Sabão em pó', price: 6 },
    { name: 'Cereal', price: 10 },
    { name: 'Toalha', price: 30 }
]
const balance = 100

console.log(calculateBalance(balance, list))