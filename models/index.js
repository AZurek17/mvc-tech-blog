const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User,{
    foreignKey: 'username',
    onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };