const { Post } = require('../models');

const postData = [
    {
        title: "Test 1",
        description: "testing first post",
        userId: 1
    },
    {
        title: "test 2",
        description: "testing second post",
        userId: 2
    },
    {
        title: "test 3",
        description: "testing third post",
        userId: 2
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;