const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment, {
  onDelete: "CASCADE",
});
Comment.belongsTo(Post);

User.hasMany(Comment, {
  onDelete: "CASCADE",
});
Comment.belongsTo(User);

module.exports = { User, Post, Comment };

// Post.hasMany(Comment, {
//     onDelete: 'CASCADE',
// });

// Comment.belongsTo(User, {
//     onDelete: 'CASCADE',
// });

// Post.belongsTo(User,{
//     onDelete: 'CASCADE',
// });
