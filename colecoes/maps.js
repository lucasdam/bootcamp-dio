function getAdmins(map) {
    let admins = []

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }

    return admins
}

const users = new Map()

users.set('Lucas', 'Admin')
users.set('Rebeca', 'Admin')
users.set('Felipe', 'User')
users.set('Laís', 'Admin')

console.log(getAdmins(users))