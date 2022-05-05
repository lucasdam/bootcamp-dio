let array1 = [1, 3, 4, 6, 80, 33, 23, 90]
let array2 = []

/* Solução 1 */
function evenToZero(array) {
    if (array.length === 0 || !array) return -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 ) array[i] = 0
    }

    return array
}

console.log(evenToZero(array1))

/* Solução 2 */
function evenToZero2(array) {
    if (array.length === 0 || !array) return -1

    return array.map((element) => {
        return element % 2 === 0 ? element = 0 : element
    })
}

console.log(evenToZero2(array1))