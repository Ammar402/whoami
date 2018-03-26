
//Basic required import for NodeJS
var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');

//Create an instance of express for our app and instantiate bodyParser and Cors
var app =module.exports= express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());






// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

//Get CALL to return JSON thats format natural and unix date

var api = '/api/whoami';
app.get(api,function (req,res,next) {
  var language = req.acceptsLanguages();
  var software = req.useragent.os;
  var ipaddress = req.ip;
  
 
  
  
   res.json({'ipaddress': ipaddress,'language':language[0],'software':software});
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})