var express = require("express")
var app = express()
require('./dbConnection');
var port = process.env.port || 3000;
let router = require('./routers/router');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.listen(3000, () => {
    console.log('express server started');
}); 