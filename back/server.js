const express = require('express');
const serveIndex = require('serve-index');
const app = express();

const www = '../front/dist/front';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

