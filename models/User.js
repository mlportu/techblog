const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        //definte a username column
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        //define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                //this means the password must be at least four characters long
                len:[4]
            }
        }
    },
    {
        //pass in our imported sequelize connection(the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        //use underscores instead of camel-casing
        underscored: true,
        //make it our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;