const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const tokenAuth = require("../../middleware/tokenAuth")
const { User, Reaction, Vote, Place } = require("../../models");

// probably get rid of this route after testing
router.get("/", (req, res) => {
  User.findAll()
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// allows user to signup, but currently must still login
// TODO: make it so that signup also logs user in 
router.post("/signup", (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    favoritePet: req.body.favoritePet,
    petPic: req.body.petPic,
    profilePic:req.body.profilePic
  })
    .then(newUser => {
      res.json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// login user route
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(foundUser => {
    if (!foundUser) {
      res.status(401).send("incorrect email or password")
    }
    else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      const token = jwt.sign({
        username: foundUser.username,
        id: foundUser.id
      },
        process.env.JWT_SECRET
        , {
          expiresIn: "2h"
        })
      res.json({
        token: token,
        user: foundUser
      });
    }
    else {
      res.status(401).send("incorrect email or password")
    }
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

// allows user to change personal settings
router.put("/:id", tokenAuth, (req, res) => {
  User.update(
    {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      favoritePet: req.body.favoritePet,
      petPic: req.body.petPic,
      profilePic:req.body.profilePic
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

// delete user's account
router.delete("/:id", tokenAuth, (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(delUser => {
        if (delUser) {
          res.json(delUser);
        } else {
          res.status(404).json({ err: "no such user found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
});

// get user's profile info
router.get("/profile", tokenAuth, (req, res) => {
  User.findByPk(req.user.id, {
    include: [Reaction, Vote, Place]
  })
    .then(foundUser => {
      res.json(foundUser)
    })
})

module.exports = router;