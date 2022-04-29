function validateArray(array, number) {
    try {
        if (!array && !number) throw new ReferenceError('Envie os parâmetros')

        if (typeof array !== 'object') throw new TypeError('O "array" precisa ser do tipo object')
        
        if (typeof number !== 'number') throw new TypeError('O "number" precisa ser do tipo number')

        if (array.length !== number) throw new RangeError('O tamanho do array não pode ser diferente do número')

        return array
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(e.message)
        } else {
            console.log('Ocorreu um tipo de erro não esperado: ' + e)
        }
    }
}

console.log(validateArray([1, 5], 2))