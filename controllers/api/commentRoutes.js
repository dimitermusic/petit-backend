const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken")
// const tokenAuth = require("../../middleware/tokenAuth")
const { Comment } = require("../../models");

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

router.post("/", (req, res) => {
  Comment.create({
    comment: req.body.comment,
    UserId: req.body.UserId
  })
    .then(newUser => {
      res.json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.put("/:id", (req, res) => {
  Comment.update(
    {
      comment: req.body.comment,
      UserId: req.body.UserId
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.delete("/:id", (req, res) => {
  Comment.findByPk(req.params.id).then(() => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(delUser => {
        if (delUser) {
          res.json(delUser);
        } else {
          res.status(404).json({ err: "no such comment found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });;
});

module.exports = router;