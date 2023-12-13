const express = require('express');

const app = express();
const dotenv = require('dotenv')

// configuration for donenv 
dotenv.config({ path: './.env' })


app.listen('8000', () => {
    console.log(`port is started on ${process.env.SERVER_PORT}`)
})
