



const tasks = {
    tasks:[{
        text: 'Groceries',
        completed: true
    }, {
        
    text: 'Eat',
    completed: false

    },{
        text: 'Sleep',
        completed: false
    }],

    getTasks() {
        return this.tasks.filter((task) => task.completed === false)
    }

}

console.log(tasks.getTasks())