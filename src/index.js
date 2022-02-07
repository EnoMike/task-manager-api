const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         // if (!file.originalname.endsWith('.pdf')) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a document'))
//         }

//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
// // app.post('/upload', errorMiddleware, (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message})
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled.')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Currently undergoing maintenance.')
// })


// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from my other router ')
// })
// app.use(router)
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {

// const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse')
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
    
//     // const password = 'Red12345'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('Red1234', hashedPassword)
//     // console.log(isMatch)
// }

// myFunction()

// const main = async () => {
//     // const task = await Task.findById('61f9a015129601c1580fcf1d')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('61f99f2227c2381c7172b8f3')
//     await user.populate('tasks')
//     console.log(user.tasks)

// }
// main()


app.listen(port, () => {
    console.log('Server is on ' + port)
})
