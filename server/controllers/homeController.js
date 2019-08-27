const picSlides = [
    {
        image: './Pics/goats1.jpg'
    },
    {
        image: './Pics/home1.jpg'
    },
    {
        image: './Pics/home2.jpg'
    },
    {
        image: './Pics/home3.jpg'
    },
    {
        image: './Pics/home4.jpg'
    },
    {
        image: './Pics/home5.jpg'
    }
]

const getHome = (req, res)=>{
    res.json(picSlides);
}

module.exports ={
    getHome
}