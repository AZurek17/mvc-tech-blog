const { Comment } = require('../models');

const commentData = [
    {
        description: "testing blog seed"
    },
    {
        description: "testing1 blog1 seed1"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;