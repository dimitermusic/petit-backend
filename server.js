const express = require('express');
const sequelize = require('./config/connection');
// const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3001;

const { User, Place, Comment, Vote, Reaction } = require("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

// app.use(routes)

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { 
//         maxAge: 1000 * 60 * 60
//     },
//     store: new SequelizeStore({
//         db:sequelize
//     })
// }));

sequelize.sync({force:false}).then(function(){
    app.listen(PORT,function(){
        console.log('Listening at http://localhost:'+PORT);
    })
})