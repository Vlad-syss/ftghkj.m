const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/docs'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log('listening on port http://localhost:port')
});