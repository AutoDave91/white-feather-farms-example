const animals = [
    {
        image: "./Pics/miniDonkey.jpg",
        location: 'Pasture',
        species: 'Miniature Donkey',
        breed: '',
        age_range: '4-7y',
        names: 'Maverick, Daisy, and Camden',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/cows.jpg",
        location: 'Pasture',
        species: 'Miniature Cow',
        breed: 'Zebu',
        age_range: '2m - 3y',
        names: 'Milly, Sarah, Ruth, Liza, Alice, Erin, and Noel',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/fullDonkey.jpg",
        location: 'Pasture',
        species: 'Donkey',
        breed: '',
        age_range: '6y',
        names: 'Josey and Stormy',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/duck2.jpg",
        location: 'yard',
        species: 'Duck',
        breed: 'Khaki Campbell',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/miniPig.jpg",
        location: 'Yard',
        species: 'Pig',
        breed: 'American Miniature',
        age_range: '1-3y',
        names: 'Sammy, Simon, and Precious',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/PotPigs.jpg",
        location: 'Yard',
        species: 'Pig',
        breed: 'Pot-bellied',
        age_range: '2w-3y',
        names: 'Peri, Pumpkin, Penny, and Little Dude',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/goats2.jpg",
        location: 'Yard',
        species: 'Goat',
        breed: 'Dwarf Nigerian',
        age_range: '1-2y',
        names: 'Toby, Penelope, Daphne, Oreo, Thumper, and Caesar',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/blackChicken.jpg",
        location: 'Yard',
        species: 'Chicken',
        breed: 'Black Australorp',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/barChicken.jpg",
        location: 'yard',
        species: 'Chicken',
        breed: 'Barred Rock',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "./Pics/whiteChicken.jpg",
        location: 'Yard',
        species: 'Chicken',
        breed: 'Pearl White Leghorn',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    }
]

const getAnimals = (req, res)=>{
    res.json(animals);
}
const deleteAnimal = (req, res)=>{
    const index = animals.findIndex(animal => animal.breed === req.params.breed);
    animals.splice(index, 1);
    res.json(animals);
}
const addAnimal = (req, res) =>{
    animals.push(req.body);
    res.json(animals);
}
const filterAnimal = (req, res) =>{
    let filtered = animals.filter(animal => animal.location.toLowerCase() === req.query.location.toLowerCase())
    res.json(filtered);
}
const searchAnimals = (req, res) =>{
    console.log(req.params)
    let searched = animals.filter(animal => animal.species.toLowerCase() === req.params.species.toLowerCase())
    res.json(searched);
}


module.exports ={
    getAnimals, deleteAnimal, addAnimal, filterAnimal, searchAnimals
}