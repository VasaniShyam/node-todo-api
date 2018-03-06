
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
   
   //deletemany
//    db.collection('Users').deleteMany({name:'Darshan'}).then((result)=>{
//         console.log(result);
//    });
//  deleteone
// db.collection('Users').deleteOne({location:'borsad'}).then((result)=>{
//     console.log(result);
// });
    //findoneAnddelete
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5a9e3a8791eeb00e6c31475c')}).then((result)=>{
            console.log(result);
    });

client.close();
})