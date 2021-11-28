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

Place.belongsToMany(User, {
    through: Vote,
});

Vote.belongsTo(Place);

User.belongsToMany(Place, {
    through: Vote,
});

Vote.belongsTo(User)

module.exports = { User, Comment, Place, Vote, Reaction };