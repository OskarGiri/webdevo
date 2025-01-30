// Importing the model
const test = require('../model/test')

// create function to get all test users
const gettest = async(req, res)=>{
    try{
        const tests = await test.findAll();
        res.status (200).json(tests);
        console.log('Retrevie all test users');
    }
    catch(eroor){
        res.status(500).json({error:'Failed to retrive test data'});
    
    }
}

// create
//  function to create test users
const createtest = async (req,res)=>{
    try{
        const{username,password} = req.body;
        const newtest = await test.create({username,password});
        res.status(200).json(newtest);
        console.log('New Test user Created')
    }
    catch(error){
        res.status(500).json({error:'Failed to create test user'});
    }
}
module.exports = {gettest,createtest};