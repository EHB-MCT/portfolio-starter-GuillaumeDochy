const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')


mongoose.connect('mongodb+srv://admin:admin@cluster0.0ml8z.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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
app.use(express.json());

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  start: Date,
  end: Date,
});

const Event = mongoose.model('Event', eventSchema);