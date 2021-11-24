const express = require("express");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth")
const { Comment, User, Reaction, Place } = require("../../models");

// delete this route after testing
router.get("/", (req, res) => {
  Comment.findAll()
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/place/:id", tokenAuth, (req, res) => {
  Comment.create({
    comment: req.body.comment,
    UserId: req.body.user.id,
    PlaceId:req.params.id
  })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.put("/:id", tokenAuth, (req, res) => {
  Comment.update(
    {
      comment: req.body.comment,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(upComment => {
      res.json(upComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

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
          res.status(404).json({ err: "no such user found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
});

module.exports = router;