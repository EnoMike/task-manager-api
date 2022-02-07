const mongoose = require('mongoose')
const validator = require('validator')


// const Task = mongoose.model('Task', {
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

// const task = new Task({
//     description: '    Try something new.      ',
//     // completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error', error)
// })
const Task = mongoose.model('Task', taskSchema)

module.exports = Task