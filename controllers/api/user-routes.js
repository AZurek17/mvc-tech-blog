const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const bcrypt  = require("bcrypt");

//find all users
router.get("/", (req, res) => {
  User.findAll({
    include:[Post, Comment]
  })
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Error occured!", err });
    });
});

//logout
router.get("/logout",(req,res)=>{
  req.session.destroy();
  res.redirect('/login');
})

//find user by id
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id,{include:[Post, Comment]})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Error occured!", err });
    });
});

//signup  api/users/
router.post("/", (req, res) => {
    User.create(req.body, {individualHooks: true} )
      .then(newUser => {
        req.session.user = {
          id:newUser.id,
          username:newUser.username
        }
        res.json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Error occured!", err });
      });
});

// login api/users/login
router.post("/login", (req, res) => {
    User.findOne({
      where:{
      username:req.body.username
    }
}).then(foundUser=>{
      if(!foundUser){
        return res.status(400).json({msg:"Incorrect email or password, please try again"})
      }
      if(bcrypt.compareSync(req.body.password,foundUser.password)){
        req.session.user = {
          id:foundUser.id,
          username:foundUser.username
        }
        return res.json(foundUser)
      } else {
        return res.status(400).json({msg:"Incorrect email or password, please try again"})
      }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Error occured!", err });
      });
});
  
// update
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    },
    individualHooks: true
  }).then(updatedUser => {
    res.json(updatedUser);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});
  
// delete
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(delUser => {
    res.json(delUser);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});


module.exports = router;