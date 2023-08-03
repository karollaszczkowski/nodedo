var express = require('express');
const PORT = process.env.PORT || 5000;
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(PORT);