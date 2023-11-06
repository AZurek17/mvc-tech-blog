const { Post } = require('../models');

const postData = [
    {
        title: "test",
        description: "testing blog"
    },
    {
        title: "test1",
        description: "testing1 blog1"
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;