const Comment = require('./Comment');
const User = require("./User");
const Place = require("./Place");
const Vote = require('./Vote')
const Reaction = require('./Reaction')

Comment.belongsTo(User);

Comment.belongsTo(Place);

Place.hasMany(Comment, {
    foreignKey:'place_id',
    onDelete:"CASCADE"
});

Reaction.belongsTo(User);

User.hasMany(Reaction),{
    foreignKey:'user_id',
    onDelete:"CASCADE"
};

Reaction.belongsTo(Comment);

Comment.hasMany(Reaction),{
    foreignKey:"comment_id",
    onDelete:"CASCADE"
}

Place.belongsToMany(User),{
    through:Vote,
    foreignKey:'place_id'
};

User.belongsToMany(Place),{
    through:Vote,
    foreignKey:'user_id'
};

module.exports= {User,Comment,Place,Vote, Reaction}