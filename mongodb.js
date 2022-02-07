// CRUD create read, update and delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    // console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne( {
    //     _id: id,
    //     name: 'Fina',
    //     age: 49
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').insertMany( [
    //     {
    //         name: 'Jen',
    //         age: 30
    //     },
    //     {
    //         name: 'Henry',
    //         age: 29
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result)
    // })
    // db.collection('users').insertMany( [
    //     {
    //         description: 'Clean the cupboard',
    //         boolean: true
    //     },
    //     {
    //         description: 'Climb the wall',
    //         boolean: false
    //     },
    //     {
    //         description: 'Empty the washer',
    //         boolean: true
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("61f1ef71117a2577d3a425f3")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("61f1ef71117a2577d3a425f3")}, (error, user) => {
    //         if (error) {
    //             return console.log('Unable to fetch.')
    //         }
    
    //         console.log(user)
    //     })
    
    //     db.collection('users').find({ boolean: false }).toArray((error, users) => {
    //         console.log(users)
    //     })
    
    //     db.collection('users').find({ boolean: false }).count((error, count) => {
    //         console.log(count)
    //     })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("61f1ef71117a2577d3a425f3")
    // }, {
    //     $set: {

    //        age: 500 
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateMany( {
    //     boolean: false
    // }, {
    //     $set: {
    //         boolean: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('users').deleteMany({
//         boolean: true
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    // db.collection('users').deleteOne({ 
    //     name: 'Mike'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    

})

