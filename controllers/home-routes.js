const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const {withAuth, areAuth } = require('../utils/auth');

// route to get all posts
router.get('/', (req, res) => {
  Post.findAll({include: [User]}).then(posts => {
      const dbPosts = posts.map(post=>post.get({plain:true}))
      const loggedIn = req.session.user?true:false;
      res.render('home', {posts:dbPosts, loggedIn, username:req.session.user?.username})
  })
})

// login        
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
    res.render('login');
  });

// signup  
router.get('/signup', (req, res) => {
    res.render('signup');
})

//route to dashboard
router.get('/dashboard', (req, res) => {
  if (!req.session.user) {
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

  router.get('/posts/:id', (req, res) => {
    if (!req.session.user) {
      return res.redirect('/login');
      }
      Post.findByPk(req.params.user.id,{include:[User, {model: Comment, include: [User]}]})
      .then(postData => {
        const dbPost = postData.get({plain:true})
        const loggedIn = req.session.user?true:false
        console.log(dbPost);
         if(postData.userId != req.session.user.id) {
         return res.render('comment', {dbPost, loggedIn, username:req.session?.username})
      }
      res.render("updateDelete", {dbPost, loggedIn, username:req.session.user?.username})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", err});
    })
    });


  module.exports = router;