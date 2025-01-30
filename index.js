//  Initialzation
const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const sequelize = require("./DB/bd.js")
const testroute = require('./routes/testroute.js')

//  Creating a server
const app = express();

//Creating a port
const Port = process.env.Port || 5000;

//  Creating a middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Welcome to the world")
})

app.get('/notice',(req,res)=>{
    res.send("This is notice")
})

// Runnin on port
app.listen(Port,()=>{
    console.log(`Server Running on.......Port${Port}`)
})