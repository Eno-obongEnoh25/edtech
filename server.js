function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

// const cors = require('cors');
const express = require('express');
const app = express();
// app.use(cors());
app.use(requireHTTPS);

app.use(express.static('./dist/edtech'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/edtech/'}
);
});

app.listen(process.env.PORT || 4200);


