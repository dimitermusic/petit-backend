const express = require("express");
const { route } = require(".");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth")
const { Vote } = require("../../models");

router.get("/", tokenAuth, (req, res) => {
    Vote.findAll({where:{UserId:req.user.id}})
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

// user will be able to vote via this route
router.put("/", tokenAuth, (req, res) => {
    Vote.update(
        {
            hasStipendUp: req.body.hasStipendUp,
            hasStipendDown: req.body.hasStipendDown,
            canBringUp: req.body.canBringUp,
            canBringDown: req.body.canBringDown,
            hasMenuUp: req.body.hasMenuUp,
            hasMenuDown: req.body.hasMenuDown,
            petTimeOffUp: req.body.petTimeOffUp,
            petTimeOffDown: req.body.petTimeOffDown
        },
        {
            where:{
                UserId:req.user.id,
                PlaceId:req.body.placeId
            }
        }
    )
    .then(updatedVote => {
        res.json(updatedVote);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err: err });
    });
});


module.exports = router;