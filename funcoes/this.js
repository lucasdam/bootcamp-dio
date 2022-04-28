function calculateAge(years) {
	return `Daqui a ${years} anos, ${this.name} terá ${
		this.age + years
	} anos de idade.`;
}

const people1 = {
    name: 'Julia',
    age: 22
}

const people2 = {
    name: 'Adriano',
    age: 28
}

const animal = {
    name: 'Rengato',
    age: 3,
    breed: 'Ragdoll'
}

console.log(calculateAge.call(people1, 10))
console.log(calculateAge.apply(animal, [2]))