const { User } = require('../models');

const userData = [
    {
        username: "andy",
        password: "password"
    },
    {
        username: "bobby",
        password: "password"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;