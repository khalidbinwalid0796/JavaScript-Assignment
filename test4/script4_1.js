const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        points: 25
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        isLoggedIn: false,
        points: 28
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        isLoggedIn: true,
        points: 0
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        isLoggedIn: false,
        points: 20
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        isLoggedIn: false,
        points: 40
    }
}

const allValues = Object.entries(users)
const uniqueUsers = {};

allValues.forEach(([key, value]) => {
    if(value.isLoggedIn == false){
        //value.email.toUpperCase();
        uniqueUsers[key]={...value,email:value.email.toUpperCase()};
    }
});

//const obj = Object.assign({}, uniqueUsers); //array to object copy????

//console.log(typeof(obj));
//let key = Object.keys(obj);
//console.log(obj[key].email); //not working
//key.email.toUpperCase(); //not working

console.log(uniqueUsers);