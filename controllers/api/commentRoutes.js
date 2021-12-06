const express = require("express");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth")
const { Comment, User } = require("../../models");

router.get("/:placeId", (req,res)=>{
  Comment.findAll({
    where:{
      PlaceId:req.params.placeId
    },
    include:[User]
  })
  .then(commentData => {
    res.json(commentData)
  }).catch(err=>{
    console.log(err);
  })
})

// YOU ARE AMAZING

// post a comment on a specific place 
router.post("/", tokenAuth, (req, res) => {
  Comment.create({
    comment: req.body.comment,
    UserId: req.user.id,
    PlaceId: req.body.placeId
  }).then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// comment is editable for user
router.put("/:id", tokenAuth, (req, res) => {
  Comment.update(
    {
      comment: req.body.comment,
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(upComment => {
      res.json(upComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

// user can delete comment
router.delete("/:id", tokenAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(delComment => {
      if (delComment) {
        res.json(delComment);
      } else {
        res.status(404).json({ err: "no such comment found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;