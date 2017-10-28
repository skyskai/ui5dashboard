var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static(__dirname + '/webapp'));
var port = process.env.PORT || 8090;
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/admin',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/admin.html'));
});


app.listen(port);

console.log("Running at Port "+port);
