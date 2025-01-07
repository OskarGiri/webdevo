const { noTrueLogging } = require('sequelize/lib/utils/deprecations');
const {Sequelize} = require('sequelize')

const sequqlize = new Sequelize('test','postgres','G!r!1519',{
    host: 'localhost',
    dialect:'postgres',
    port:5432,
    logging:false,
});
async function testConnection() {
    try{
        await sequqlize.authenticate();
        console.log('DB Connection successful')
    }
    catch(error){
        console.error("unable to connect",error)
    }
    
}
testConnection()

module.exports = sequqlize;