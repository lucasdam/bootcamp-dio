function filterEvenNumbers(array) {
    let evenNumbers = array.filter((element) => {
        return element % 2 == 0
    })

    return evenNumbers
}

const array = [1, 5, 4, 4, 8, 2, 0, 6, 5, 4, 2]

console.log(filterEvenNumbers(array))