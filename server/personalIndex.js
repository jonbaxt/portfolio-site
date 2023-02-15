const express = require('express');
const bodyParser = require('body-parser');


// const aws = require('aws-sdk');
const chalk = require('chalk');
require('dotenv').config();

const { SERVER_PORT }  = process.env;

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

app.listen(SERVER_PORT, () => { console.log(chalk.bgGreen.black(`This server is ON! ${SERVER_PORT}`)) });