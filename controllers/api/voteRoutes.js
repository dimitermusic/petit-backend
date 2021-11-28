const express = require("express");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth")
const { Vote, Place, User } = require("../../models");

// delete after testing
router.get("/", (req, res) => {
    Vote.findAll()
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

// router.post("/", (req, res) => {
//     Vote.create({
//         hasStipendUp: req.body.hasStipendUp,
//         hasStipendDown: req.body.hasStipendDown,
//         canBringUp: req.body.canBringUp,
//         canBringDown: req.body.canBringDown,
//         hasMenuUp: req.body.hasMenuUp,
//         hasMenuDown: req.body.hasMenuDown,
//         petTimeOffUp: req.body.petTimeOffUp,
//         petTimeOffDown: req.body.petTimeOffDown
//     },
//         {
//             include: [Place, User]
//         })
//         .then(newUser => {
//             res.json(newUser);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ err });
//         });
// });

router.put("/:id", tokenAuth, (req, res) => {
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
            include: [Place, User],
            where: {
                id: req.params.id
            }
        })
        .then(updatedVote => {
            res.json(updatedVote);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: err });
        });
});

// router.delete("/:id", (req, res) => {
//     Vote.findByPk(req.params.id).then(() => {
//         Vote.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//             .then(delUser => {
//                 if (delUser) {
//                     res.json(delUser);
//                 } else {
//                     res.status(404).json({ err: "no such vote found!" });
//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json({ err });
//             });
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({ err });
//     });;
// });

module.exports = router;