const { Comment } = require('../models');

const commentData = [
    {
        description: "testing blog seed"
    },
];

const seedComment = () => Post.bulkCreate(commentData);

module.exports = seedComment;