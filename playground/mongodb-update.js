
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a9e3573ec0f8e2318ad2873')
    }, {
            $set: {
                location: "Nadiad"
            },
            $inc:{
                age:1
            }
        }, {
            returnOriginal: false
        }).then((result)=>{
            console.log(result);
        });
    client.close();
})