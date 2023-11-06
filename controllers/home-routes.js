const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const {withAuth, areAuth } = require('../utils/auth');

// route to get all posts
router.get('/', (req, res) => {
  
     Post.findAll({include: [User]}).then(posts => {
      const postData = posts.map(post=>post.get({plain: true}))
      const loggedIn = req.session.user?true:false;
      res.render('home',{posts:postData, loggedIn, username:req.session.user?.username})
      })
    })
//        

router.get('/login', areAuth, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
    res.render('login');
  });

router.get('./signup', (req, res) => {
res.render('signup');
})

//route to dashboard
router.get('/dashboard',(req, res) => {
  if (req.session.user) {
    return res.redirect('/login');
    }
    User.findByPk(req.session.user.id, {
      include: [Post, Comment]
    }).then(userData => {
      const dbData = userData.get({plain:true})
      dbData.loggedIn = req.session.user?true:false
      res.render("dashboard", dbData)
    })
  });

router.get('/comment/:id', async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id);

    const comment = dbCommentData.get({ plain: true });
    res.render('painting', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  
  module.exports = router;