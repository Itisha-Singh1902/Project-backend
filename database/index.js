const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(cors());

app.get('/',async(req,res)=>{
    const url = 'mongodb+srv://singhitisha19july:Itisha19@cluster0.k6acre0.mongodb.net/';
    const client = new MongoClient(url);
    await client.connect().then(()=>{
        console.log('Database Connected!')
    }).catch(()=>{
        console.log('Error in connection!');
    });
    const db = client.db('assignment');
    const collection = db.collection('projects');
    await collection.find({}).toArray().then((e)=>{
        res.send(e);
    }).catch((e)=>{
        console.log(e);
    })
    client.close().then((e)=>{
        console.log('Connection Closed!')
    }).catch((e)=>{
        console.log('Error in closing connection');
    })
});
app.listen(8000,(e)=>{
    console.log("Server connected at 8000");
})
