const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
    // useCreateIndex: true
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: '    Try something new.      ',
//     // completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
