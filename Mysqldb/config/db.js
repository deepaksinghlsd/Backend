const {Sequelize} = require("sequelize")
require ("dotenv").config();

const sequelize = new Sequelize (process.env.DB_Name , process.env.DB_user , process.env.DB_pw , {
    host: process.env.DB_host ,
    dialect: 'mysql',
    logging: false,
    });

(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
    } catch (error) {
        console.log('unable to connect to the database' , error);
        
    }

})()

module.exports = sequelize;
