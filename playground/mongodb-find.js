
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
   
    db.collection('Todos').find(
        {
            _id:new ObjectID('5a9e328dfe96ae041c373568') 
        }
    ).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to Fetch the Docs',err);
    });
    client.close();
})