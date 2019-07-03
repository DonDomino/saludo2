const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
  let name = req.params.name;
  let msg = "";
  msg = `<h1>Hola ${name.charAt(0).toUpperCase() + name.slice(1)}!</h1>`;
  res.send(msg);
});

app.listen(3000, () => console.log('Listening on port 3000!'));