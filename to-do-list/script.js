let form = document.getElementById('form')
let task = document.getElementById('task')
let list = document.getElementById('list')

form.addEventListener('submit', function(e) {
    console.log(task.value)
    list.innerHTML += `
    <div>
        <input type="checkbox" id="task-${task.value.replace(' ', '-')}">
        <label for="task-${task.value.replace(' ', '-')}">${task.value}</label>
    </div>
    `

    task.value = ''
    task.focus()
    
    e.preventDefault()
})