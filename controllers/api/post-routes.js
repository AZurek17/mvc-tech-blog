const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const { withAuth, areAuth } = require("../../utils/auth");

//Get all Posts
router.get("/", (req, res) => {
  Post.findAll({ include: [User, Comment] })
    .then((dbPost) => {
      res.json(dbPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured!", err });
    });
});

//Find Post by ID
router.get("/:id", (req, res) => {
  Post.findByPk(req.params.id, { include: [User, Comment] })
    .then((dbPost) => {
      res.json(dbPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//Create New Post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.session.user.id,
    });
    res.status(201).json("You created a new post!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update Route
router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login!" });
  }
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login!" });
  }
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delPost) => {
      res.json(delPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
