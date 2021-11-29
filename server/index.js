const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.listen(3000);
console.log('serving app at http://localhost:3000');

const dirPath = path.resolve(__dirname, '..', process.env.ASSET_DIR, 'app');
const staticServer = express.static(dirPath);
app.use(staticServer);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
});

app.get('/users', (req, res) => {
  const db = fs.readFileSync(path.resolve(__dirname, '..', 'db/users.json'), 'utf-8');
  const users = JSON.parse(db);
  res.send(users);
});
