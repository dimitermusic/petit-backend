const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")
// const tokenAuth = require("../../middleware/tokenAuth")
const { User, Reaction, Vote } = require("../../models");

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

router.post("/signup", (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    favoritePet: req.body.favoritePet,
    petPic: req.body.petPic
  })
    .then(newUser => {
      res.json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

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
        email: foundUser.email,
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

router.put("/:id", (req, res) => {
  User.update(
    {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      favoritePet: req.body.favoritePet,
      petPic: req.body.petPic
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
  User.findByPk(req.params.id).then(() => {
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
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });;
});

router.get("/profile", (req, res) => {
  User.findByPk(req.user.id, {
    include: [Reaction, Vote]
  })
    .then(foundUser => {
      res.json(foundUser)
    })
})

module.exports = router;