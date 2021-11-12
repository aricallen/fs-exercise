const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.listen(3000);
console.log('serving app at http://localhost:3000');

const staticDirPath = path.resolve(__dirname, '..', 'dist', 'app');
const staticServer = express.static(staticDirPath);
app.use(staticServer);