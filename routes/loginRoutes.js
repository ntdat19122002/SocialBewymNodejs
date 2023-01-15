const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const User = require('../schemas/UserSchema')

app.set("view engine", "pug");
app.set("views", "views");

const bodyParser = require('body-parser')

router.get("/", (req, res, next) => {
    res.status(200).render("login");
})

router.post("/",(req,res,next)=>{

})

module.exports = router;