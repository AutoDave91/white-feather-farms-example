const express = require('express');
const app= express();

const homeController = require('./controllers/homeController');
const animalController = require('./controllers/animalController');
const familyController = require('./controllers/familyController');
const eventsController = require('./controllers/eventsController');

app.use(express.json());

app.get('/api/home', homeController.getHome)
app.get('/api/animals', animalController.getAnimals)
app.get('/api/family', familyController.getFamily)
app.get('/api/events', eventsController.getEvents)
app.get('/api/animals/filter', animalController.filterAnimal)
app.get('/api/animals/:species', animalController.searchAnimals)

// app.post('/api/animals')
app.post('/api/events', eventsController.addEvent);

// app.put('/api/animals/:')
// app.put('/api/family/:')
app.put('/api/events/:title', eventsController.editEvent)

// app.delete('/api/animals')
app.delete('/api/events/:title', eventsController.deleteEvent)



const SERVER_PORT = 5050;
app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on ${SERVER_PORT}`)
    console.log("I'm a 3/4 stack developer!!")
})