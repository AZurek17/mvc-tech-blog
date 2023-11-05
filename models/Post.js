const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },  
        user_name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'post',
    }
);

module.exports = Post;