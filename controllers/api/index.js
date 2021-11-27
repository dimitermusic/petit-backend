const express = require('express');
const router = express.Router();
const commentRoutes = require("./commentRoutes");
const placeRoutes = require("./placeRoutes");
const reactionRoutes = require("./reactionRoutes");
const userRoutes = require("./userRoutes");
// const voteRoutes = require("./voteRoutes");


router.use("/comments", commentRoutes);
router.use("/places", placeRoutes);
router.use("/reactions", reactionRoutes);
router.use("/users", userRoutes);
// router.use("/votes", voteRoutes);
router.get("/",(req,res)=>{
    res.send("Pet me 🐶")
})

module.exports = router;