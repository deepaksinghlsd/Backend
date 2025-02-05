const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task" , {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    //     },
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    status : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});
module.exports = Task;