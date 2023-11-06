const { Post } = require('../models');

const postData = [
    {
        title: "test",
        description: "testing blog"
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;