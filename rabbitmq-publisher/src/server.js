const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded());
app.use(router);

app.listen(3000, () => {
    console.log('Server is Running!');
});