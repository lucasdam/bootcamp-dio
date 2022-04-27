function sum(num1, num2) {
    let total = num1 + num2

    let isEqual = num1 == num2 ? 'são iguais' : 'não são iguais'

    let higherOrLowerThan10 = total > 10 ? 'maior que 10' : 'menor que 10'
    if (total == 10) higherOrLowerThan10 = 'igual a 10'

    let higherOrLowerThan20 = total > 20 ? 'maior que 20' : 'menor que 20'
    if (total == 20) higherOrLowerThan10 = 'igual a 20'

    return `Os números ${num1} e ${num2} ${isEqual}. Sua soma é ${total}, que é ${higherOrLowerThan10} e ${higherOrLowerThan20}.`
}

console.log(sum(1, 2))