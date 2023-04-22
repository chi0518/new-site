const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('express 띄우기공!!!');
});

app.listen(port, () => {
  console.log(`짜자잔!. http://localhost:${port}`);
});