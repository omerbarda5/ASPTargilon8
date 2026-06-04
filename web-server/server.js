const express = require('express');
const app = express();

const port = 8080;

app.use(express.static('public'));


const webserver = app.listen(port, () => {
  console.log(`Web server running at http://localhost:${port}`);
});

webserver.on('error', (error) => {
  console.error('Error starting server:', error);
});
