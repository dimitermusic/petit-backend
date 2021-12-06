const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const { cloudinary } = require('./utils/cloudinary');
const { User, Place, Comment, Vote, Reaction } = require("./models");

// DEVELOPMENT ONLY:
app.use(cors());

// FOR HEROKU DEPLOYMENT
// app.use(cors({
//     // origin:["https://petit-petfriendly.herokuapp.com/"]
// }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes)

sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('Listening at http://localhost:' + PORT);
    })
})
