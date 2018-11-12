const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
});

app.use(express.static('dist'))

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
