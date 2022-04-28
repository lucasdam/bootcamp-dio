/* Exemplo 1, map() com this */
const apple = { value: 2 }
const orange = { value: 3 }

function multiplyNumbers(array, thisArg) {
    return array.map(function (item) {
        return item * this.value
    }, thisArg)
}

const numbers = [1, 2]

console.log('this -> maça: ' + multiplyNumbers(numbers, apple))
console.log('this -> orange: ' + multiplyNumbers(numbers, orange))

/* Exemplo 2, map() sem this */
function multiplyBy2(array) {
    return array.map(function (item) {
        return item * 2
    })
}

const nums = [2, 4, 6, 8, 3]

console.log(multiplyBy2(nums))