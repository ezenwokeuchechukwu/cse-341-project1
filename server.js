const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Use the router
const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
