//Project Data for the server
let projectData = {};
//Adding the express framework
const express = require('express');
//Creating an instance of the express web framework
const app = express();

//Adding the body-parser middleware
const bodyParser = require('body-parser');
//Using the middleware in the app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Adding cors dependency
const cors = require('cors');
//Using the cors functionality in the app
app.use(cors());

//Setting up the server to use the website folder for client
app.use(express.static('website'));

//Setting up the port to be used by the express server
const port = 3000;

//Setting up and starting the express server
app.listen(port, () => {
    console.log(`The server has been started locally at port ${port}!`);
});

app.post('/save', function (req, res){
    projectData = req.body;
    console.log("post request: received");
    console.log(projectData);
    //res.send(body);
    res.send('post received');
});

app.get('/fetch', function(req, res){
    res.send(projectData);
});