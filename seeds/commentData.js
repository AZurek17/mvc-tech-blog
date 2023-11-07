const { Comment } = require('../models');

const commentData = [
    {
        description: "testing comment blog",
        postId: 1,
        userId: 1,
    },
    {
        description: "testing1 comment blog1",
        postId: 2,
        userId: 2,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;