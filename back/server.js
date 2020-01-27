const express = require('express');
const serveIndex = require('serve-index');
const app = express();

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

