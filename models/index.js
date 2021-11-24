const Comment = require('./Comment');
const User = require("./User");
const Place = require("./Place");
const Vote = require('./Vote')
const Reaction = require('./Reaction')

Comment.belongsTo(User);

Comment.belongsTo(Place);

Place.hasMany(Comment, {
    foreignKey:'PlaceId',
    onDelete:"CASCADE"
});

Comment.belongsToMany(User),{
    through:Reaction,
    foreignKey:'comment_id'
};

User.belongsToMany(Comment),{
    through:Reaction,
    foreignKey:'user_id'
};

Place.belongsToMany(User),{
    through:Vote,
    foreignKey:'place_id'
};

User.belongsToMany(Place),{
    through:Vote,
    foreignKey:'user_id'
};

module.exports= {User,Comment,Place,Vote, Reaction}