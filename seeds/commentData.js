const { Comment } = require('../models');

const commentData = [
    {
        description: "hello test",
        postId: 1,
        userId: 2,
    },
    {
        description: "Hello Test1",
        postId: 2,
        userId: 2,
    },

];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;