const router = require("express").Router();
const { Comment, Post, User } = require("../../models");

//find all comments
router.get("/", (req, res) => {
  Comment.findAll({ include: [User, Post] })
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured", err });
    });
});

//find one comment
router.get("/:id", (req, res) => {
  Comment.findByPk(req.params.id, { include: [User, Post] })
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured", err });
    });
});

//post comment
router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Must login first!" });
  }
  Comment.create({
    description: req.body.description,
    // date: req.body.date,
    userId: req.session.user.id,
    postId: req.body.postId,
  })
    .then((newComment) => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured", err });
    });
});

//update comment
router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Must login first!" });
  }
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedComment) => {
      res.json(updatedComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured", err });
    });
});

//delete comment
router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Must login first!" });
  }
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delComment) => {
      res.json(delComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error occured", err });
    });
});

module.exports = router;
