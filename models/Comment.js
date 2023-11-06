const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // comment_date: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //   },
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'post',
        //         key: 'id',
        //     }
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
),
{
    sequelize,
    timestamps: true,
    modelName: 'comment',
};

module.exports = Comment;