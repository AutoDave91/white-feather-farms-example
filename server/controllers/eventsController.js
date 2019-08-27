const eventSlides = [
    {
        image: './Pics/officeSocials.jpg',
        title: 'Office Social',
        details: 'Invite your office out to the farm.'
    },
    {
        image: './Pics/shooting.jpg',
        title: 'Shooting',
        details: 'Come on out to our shooting range (supervised)'
    },
    {
        image: './Pics/wedding.png',
        title: 'Weddings',
        details: 'Have your small rustic wedding with us!'
    }
]

const getEvents = (req, res)=>{
    res.json(eventSlides);
}
const deleteEvent = (req, res)=>{
    // console.log(req.params)
    const index = eventSlides.findIndex(event =>event.title ===req.params.title);
    eventSlides.splice(index, 1);
    res.json(eventSlides);
}
const addEvent = (req, res)=>{
    eventSlides.push(req.body);
    res.json(eventSlides);
}
const editEvent = (req, res)=>{
    const index =eventSlides.findIndex(event =>event.title ===req.params.title);
    eventSlides.splice(index, 1, req.body);
    res.json(eventSlides)
}

module.exports ={
    getEvents, deleteEvent, addEvent, editEvent
}