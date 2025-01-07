const{Datatype} = require('sequelize');
const sequelize = require('../DB/bd');

const test = sequelize.define('test',{
    id:{
        type:Datatype.INTEGER,
        primarykey:true,
        autoIncrement:true,
    },
    name:{
        type:Datatype.STRING,
        allowNull:false,
    },
    email:{
        type:Datatype.String,
        allowNull:false,
        unique:true,
    },
});
module.exports = test;
