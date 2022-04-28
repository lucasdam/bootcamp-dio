/* Solução 1 */
function isPalindrome(word) {
    if (!word) return 'Passa uma palavra aí, fera'

    return word === word.split('').reverse().join('') ? 
        `${word} é palídromo` : `${word} não é palíndormo`
}

console.log(isPalindrome('ama'))

/* Solução 2 */
function isPalindrome2(word) {
    if (!word) return 'Passa uma palavra aí, fera'

    for (let i = 0; word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i])
            return `${word} não é palídromo`
    }

    return `${word} é palíndormo`
}

console.log(isPalindrome2('radar'))