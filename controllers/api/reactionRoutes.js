const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken")
// const tokenAuth = require("../../middleware/tokenAuth")
const { Reaction } = require("../../models");

router.get("/", (req, res) => {
    Reaction.findAll()
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

router.post("/", (req, res) => {
    Reaction.create({
        like: req.body.like,
        heart: req.body.heart,
        disapproval: req.body.disapproval
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
    Reaction.update(
        {
            like: req.body.like,
            heart: req.body.heart,
            disapproval: req.body.disapproval
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
    Reaction.findByPk(req.params.id).then(() => {
        Reaction.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(delUser => {
                if (delUser) {
                    res.json(delUser);
                } else {
                    res.status(404).json({ err: "no such reaction found!" });
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