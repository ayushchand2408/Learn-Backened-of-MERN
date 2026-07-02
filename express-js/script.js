const express = require('express')
const app = express();

//these will be called first as they are middleware
app.use(function (req,res,next){
    console.log('middleware chala');
    next();
});
app.use(function (req,res,next){
    console.log('middleware chalate raho');
    next();
});

//app.get(route , requestHandler) requestHandler is a middleware
app.get('/', function(req,res){
    res.send("champion hi ")
})

app.get('/person', function(req,res){
    res.send("Loser ")
})

app.listen(3000)