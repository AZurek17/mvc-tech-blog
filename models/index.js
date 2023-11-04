const User  = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post,{
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };