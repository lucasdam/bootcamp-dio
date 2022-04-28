function evenToZero(array) {
    if (array.length === 0 || !array) return -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 ) array[i] = 0
    }

    return array 
}

let array1 = [1, 3, 4, 6, 80, 33, 23, 90]
let array2 = []

console.log(evenToZero(array2))