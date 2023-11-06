const express = require('express')
const app = express()
const connectToDB = require('./config/MongoBd')
const cors = require('cors')
const route = require('./route/route')
require('dotenv').config()

app.use(express.json())

app.use(cors({
    origin: '*'
}))

app.use('/user' , route)
app.get('/', (req, res) => res.send('Hello World!'))

const startConnection = async ()=>{
    try{
        app.listen(3005, () => console.log('server live in port 3005'))
        await connectToDB(process.env.MONGO_URL);
    }
    catch(err){
        console.log("error occured",err);
    }
}
startConnection();




