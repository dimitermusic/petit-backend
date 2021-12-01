const express = require("express");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth")
const { Reaction, User } = require("../../models");
const { update } = require("../../models/Vote");

// delete after testing
router.get("/", (req, res) => {
    Reaction.findAll({include:User})
        .then(reactData => {
            res.json(reactData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

// creates a reaction for the correct comment and user info
router.post("/:id", tokenAuth, (req, res) => {
    Reaction.create({
        like: req.body.like,
        heart: req.body.heart,
        disapproval: req.body.disapproval,
        UserId:req.user.id,
        CommentId:req.params.id
    })
        .then(newReact => {
            res.json(newReact);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

// allows user to update 
router.put("/:id", tokenAuth, (req, res) => {
    Reaction.findByPk(req.params.id)
    .then((data)=>{
        if(req.user.id===data.UserId){
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
            ).then(updatedReact => {
                    res.json(updatedReact);
            }).catch(err => {
                    console.log(err);
                    res.status(500).json({ err: err });
            });
        }else{
            res.json(403).json("this isn't your reaction!")
        }

    })
});

// let's user delete reaction... maybe get rid of later?
router.delete("/:id", tokenAuth, (req, res) => {
    Reaction.findByPk(req.params.id).then(() => {
        Reaction.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(delReact => {
                if (delReact) {
                    res.json(delReact);
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