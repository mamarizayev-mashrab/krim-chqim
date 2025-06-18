const express = require('express');
const app = express();
const port = 3000;

// public papkaga kirishga ruxsat
app.use(express.static('public'));

// asosiy sahifa
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server ishga tushdi: http://localhost:${port}`);
});
