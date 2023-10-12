const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const {
  MongoClient,
    ObjectId, 
    ServerApiVersion
} = require('mongodb')

const uri = "mongodb+srv://admin:admin@cluster0.0ml8z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = "Dev5"
const cors = require('cors')

app.listen(3000, (err) => {
    if(!err){
        console.log("running on port " + 3000)
    }
    else {
        console.error(err)
    }
})

app.use(bodyParser.json())
app.use(cors())