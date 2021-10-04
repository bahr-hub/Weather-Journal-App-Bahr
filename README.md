# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## About project:
Weather Journal App project for Front End Developer Nanodegree program of Udacity. The main focus put on:

    setting up local server using Node.js and Express.js,
    GET and POST requests (client <-> API, client <-> server) using promises and Fetch API,
    User Interface updates in according to the user input and based on that data fetched from the API.

## Setup

To get the project up and running follow the steps below:

    To set up project environment, make sure that the Node and packages (express, cors and body-parser) installed, and which are used to create the server.

    After that to start your server, run the command node server.js in your terminal

## Note:

There is no database behind and the entries aren't stored when the session ends. Moreover, only the last generated entry is visible in the "Latest entries" section. One default entry is loaded with index.html file for visual purposes and gets replaced once the user generates his/her own entry.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


## Files

    node_modules: npm modules necessary for the project (bodyParser, express, cors),
    website:
        app.js: client side code with requests and UI handling;
        index.html
        style.css
        source.unsplash.com: background images for screens.
    package.json
    server.js: server side code.

## Development Strategy

    Setting up project environment, making sure Node and packages installed, and included in server.js file.
    Added POST and GET routes to ensure correct retrieval of data from the server.
    Acquired API credentials from OpenWeatherMap website.
    Created async functions to fetch weather data and store it on my local server.
    Set up a function that updated UI dynamically.
## Final Output

