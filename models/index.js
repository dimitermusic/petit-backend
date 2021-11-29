const Comment = require('./Comment');
const User = require("./User");
const Place = require("./Place");
const Vote = require('./Vote')
const Reaction = require('./Reaction')

Comment.belongsTo(User);

Comment.belongsTo(Place);

Place.hasMany(Comment, {
    onDelete: "CASCADE"
});

Reaction.belongsTo(User);

User.hasMany(Reaction, {
    onDelete: "CASCADE"
});

Reaction.belongsTo(Comment);

Comment.hasMany(Reaction, {
    onDelete: "CASCADE"
});

Place.hasMany(Vote,{
    onDelete:"CASCADE"
});

Vote.belongsTo(Place);

User.hasMany(Vote, {
    onDelete:"CASCADE"
});

Vote.belongsTo(User)

module.exports = { User, Comment, Place, Vote, Reaction };