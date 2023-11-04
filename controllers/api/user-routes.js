const router = require('express').Router();
const { User } = require('../../models');

//CREATE new user
router.post('/', async (req, res) => {
    try{
        const userDbData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIN = true;
            res.status(200).json(userDbData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const userDbData = await User.findOne({
            where: {
                username: req.body.username,
            },
    });
    if (!userDbData) {
        res.status(400).json({ message: "Incorrect username or password! Try Again!"});
        return;
    }
    const validPassword = await userDbData.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({ message: "Incorrect username or password! Try Again!"});
        return;
    }

    req.session.save(() => {
        res.session.loggedIn = true;
        console.log(' ', res.sesson.cookie); ///---- Add data
    

    res.status(200).json({ user: userDbData, message: 'your are logged in!'});
    });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

//Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;