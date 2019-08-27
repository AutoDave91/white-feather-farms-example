const family = [
    {
        image: './Pics/davidLN.jpg',
        name: 'David L Newman',
        job: 'Operations Manager',
        fav_animal: 'Maverick the mini-donkey',
        fav_activity: 'mowing the field',
        children: ['David W Newman',', ', 'Megan Beattie']
    },
    {
        image: './Pics/christinaN.jpg',
        name: 'Christina Newman',
        job: 'Office Manager/HR',
        fav_animal: 'Penny the pig',
        fav_activity: "rubbing Penny's belly",
        children: ['David W Newman',', ', 'Megan Beattie']
    },
    {
        image: "./Pics/aprilDavidRylie.jpg",
        name: 'David W Newman',
        job: '',
        fav_animal: 'the pigs',
        fav_activity: 'shooting',
        children: ['Rylie Newman']
    },
    {
        image: "./Pics/aprilDavidRylie.jpg",
        name: 'April Newman',
        job: 'NICU/PICU Respiratory Therapist',
        fav_animal: 'the goats',
        fav_activity: 'feeding the goats',
        children: ['Rylie Newman']
    },
    {
        image: './Pics/beattieClan.jpg',
        name: 'Alex Beattie',
        job: ['Fire Fighter', ', ', 'USAF reservist'],
        fav_animal: 'the cows',
        fav_activity: 'shooting',
        children: ['Michael Beattie',', ', 'Kathryn Beattie']
    },
    {
        image: 'https://media.licdn.com/dms/image/C4E03AQH0KxqHYKSqEg/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=JMB9LOKEon5QpOYpJLJpdMCuQUllJppbfupgqo_HNXU',
        name: 'Megan Beattie',
        job: 'Personal Trainer',
        fav_animal: 'the goats',
        fav_activity: 'feeding the goats animal crackers',
        children: ['Michael Beattie',', ', 'Kathryn Beattie']
    }
]

const getFamily = (req, res)=>{
    res.json(family);
}

module.exports ={
    getFamily
}