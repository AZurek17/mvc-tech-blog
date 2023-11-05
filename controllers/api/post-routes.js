const router = require('express').Router();
// const { Post, Comment, User } = require('../../models');
// //Get all Posts
// router.get('/', (req, res) => {
//     Post.findAll().then((postData) =>{
//         res.json(postData);
//     });
// });

// //Find Post by ID
// router.get('/:id', (req, res) => {
//     Post.findByPk(req.params.id).then((postData) => {
//         res.json(postData);
//     });
// });

// //Create New Post
// router.post('/', (req, res) => {
//     Post.create(req.body)
//     .then((newPost) => {
//         res.json(newPost);
//     })
//     .catch((err) => {
//         res.json(err);
//     });
// });

// //Update Route
// router.post('/', async (req, res) => {
//     try {
//       const dbPostData = await User.create({
//         title,
//         description,
//         user_name,
//       });
  
//       // Set up sessions with a 'loggedIn' variable set to `true`
//       req.session.save(() => {
//         req.session.loggedIn = true;
  
//         res.status(200).json(dbPostData);
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

//   router.put ('/:id', (req, res) => {
//     Post.update (
//         {
//             Title,
//         },
//         {
//           where: {
//             id: req.params.id
//           },
//         }
//     )
//     .then((updatePost) => {
//         res.json(updatePost)
//     })
//     .catch ((err) => res.json)
//   })


//   //Delete Post
//   router.delete('./:id', (req, res) => {
//     Post.destroy ({
//         where: {
//             id: req.params.id,
//         }
//     })
//     .then((deletePost) => {
//         res.json(deletePost);
//     })
//     .catch((err) => res.json(err));
//   });

  module.exports = router;