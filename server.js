const express = require('express');
const Router = express.Router();
const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

sequelize.sync({force:false}).then(function(){
    app.listen(PORT,function(){
        console.log('Listening at http://localhost:'+PORT);
    })
})