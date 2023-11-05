const router = require('express').Router();
const Post = require('../models');

// route to get all posts
router.get('/', async (req, res) => {
 try {
    const postData = await Post.findAll({
        include: [
            {
              model: Post,
              attributes: ['title', 'description'],
            },
        ],
    });
    const posts = postData.map((post) => 
      post.get({ plain: true })
    );
    
    res.render('home', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', areAuth, (req, res) => {
    res.render('login');
  });
  
  module.exports = router;