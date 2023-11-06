const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },  
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'post',
    }
);

module.exports = Post;