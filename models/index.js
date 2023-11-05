const User  = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post,{
    foreignKey: 'user_id'
});

User.hasMany(Comment,{
    foreignKey: 'user_name'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsToMany(Post, {
    through: Post,
    foreignKey: 'user_name'
});

module.exports = { User, Post, Comment };