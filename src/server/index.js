const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const distPath = path.resolve(__dirname, '..', 'dist');

app.use(express.static(path.resolve(__dirname, '../../dist')));


// SERVER CONNECTION
app.listen(port, () => {
  console.log(`\
    Listening at:\n \n http://127.0.0.1:${port} \n\n http://localhost:${port}
    `);
  });
  
  // app.get('/*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  // });