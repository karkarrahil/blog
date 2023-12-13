const express = require('express');
const path = require('path')
const app = express();
const dotenv = require('dotenv')

// configuration for donenv 
dotenv.config({ path: './.env' })

app.set("view engine", "ejs");

app.set("views", path.resolve('./views'))


app.get("/", (req, res) => {
    res.render('Home')
})


app.listen(process.env.SERVER_PORT, () => {
    console.log(`port is started on ${process.env.SERVER_PORT}`)
})
