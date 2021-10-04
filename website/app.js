/* Global Variables */
const form = document.querySelector('.app__form');
const icons = document.querySelectorAll('.entry__icon');

// URL and the API key
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=0099d46ac3030b911e8966c5e6687fdc&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toDateString();


// Event listener to add function to existing HTML DOM element
const generation = document.getElementById('generate');
generation.addEventListener('click', generateData);


function generateData(d) {
    d.preventDefault();

    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    if (zipCode !== '') {
        generation.classList.remove('invalid');
        getWeatherData(baseUrl, zipCode, apiKey)
            .then(function(userData) {
                // add data to POST request
                postData('/add', 
                { temp: userData.main.temp, name: userData.name,
                    description: userData.weather[0].description,
                    date: newDate, content: feeling });
            }).then(function(newData) {
                // call updateUI to update browser content
                updateUI()
                // Show messege error 
            }).catch(function(error) {
                console.log(error);
                alert('The zip code is invalid. Try again');

            });
        // reset form
        form.reset();
    } else {
        generation.classList.add('invalid');
    };

};



    //get user input
  

// Function to GET Web API Data
const getWeatherData = async(baseUrl, zipCode, apiKey) => {
    // res equals to the result of fetch function
    const res = await fetch(`${baseUrl}${zipCode}${apiKey}`);
    try {
        // data equals to the result of fetch function
        const usersData = await res.json();
       

        return usersData;
    } catch (error) {
        console.log('error', error);
    }
    
};

// Post Data

const postData = async (url = '', data = {}) => {
    const reqData = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        name: data.name,
        description: data.description,
        content: data.content
      })
    });
  
    try {
      const newData = await reqData.json();
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };
  
  
  const updateUI = async () => {
    const request = await fetch('/all');
    try {

        const allData = await request.json()
        // show icons on the page
       icons.forEach(icon => icon.style.opacity = '1');
        // update new entry values
        
        document.getElementById('name').innerHTML = 'Weather in '+ allData.name;
        document.getElementById('temp').innerHTML = 'Temperature: '+ allData.temp;
        document.getElementById('description').innerHTML ='Description: '+ allData.description;
        document.getElementById('date').innerHTML = 'Date: '+ allData.date;
        document.getElementById('content').innerHTML ='Feeling: '+ allData.content;
        
    
        
    } 
    catch (error) {
        console.log('error', error);
    }
};


