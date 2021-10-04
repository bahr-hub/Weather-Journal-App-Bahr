// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// GET Route to retrieve projectData
app.get('/all', (req, res) => {
    res.status(200).send(projectData);
});

// POST route 
const data = [];
app.post('/add', addInfo);

// call bcak function to post data 
function addInfo(req, res) {
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['content'] = req.body.content;
    projectData['name'] = req.body.name;
    projectData['description'] = req.body.description;

    res.send(projectData);
};

// Setup Server
const port = 5500;
const server = app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
};
