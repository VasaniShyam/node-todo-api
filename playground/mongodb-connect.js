
const {MongoClient,ObjectID}=require('mongodb');

console.log(new ObjectID);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
   
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     //console.log(result.ops);
    //   //  console.log('Inserted');
    // })
    db.collection('Users').insertOne({
        name:'Shyam Patel',
        age:22,
        location:'Nadiad'

    },(error,result)=>{
        if(error){
            return console.log('Unable to insert Users',error);
        }
        console.log(result.ops);
    })

    client.close();
})