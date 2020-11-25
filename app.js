const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const clientDir =__dirname + "\\client\\"
app.use(express.static(clientDir))
app.use(bodyParser.urlencoded({extended: true}));

   app.post('/', (req, res) => {
    console.log(req.body.yes)
  
    databaseModule.storePerson(req.body.yes)
  
    res.redirect('/')
  })


app.listen(3000, function(){
    console.log("Server has started on port 3000")
});
