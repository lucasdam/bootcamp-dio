function approvedStudents(students, average) {
    let approvedStudents = []

    for (let i = 0; i < students.length; i++) {

        const {name, grade} = students[i]

        if (grade >= average) {
            approvedStudents.push(name)
        }
    }

    return approvedStudents
}

const students = [
    {
        name: 'Lucas',
        grade: 5,
        class: '1B'
    },
    {
        name: 'Laura',
        grade: 9,
        class: '1B'
    },
    {
        name: 'Ingrid',
        grade: 6,
        class: '2C'
    },
    {
        name: 'Breno',
        grade: 3,
        class: '2C'
    }
]

console.log('Os alunos aprovados são: ' + approvedStudents(students, 5).join(', '))