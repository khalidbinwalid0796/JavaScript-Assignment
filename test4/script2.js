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
const allSkills = [];
var conArr = [];

allValues.forEach(([key, value]) => {
    allSkills.push(value.skills)
});

//multiple array converted into single array
//var flatArray = Array.prototype.concat.apply([], allSkills);
//var flatArray = [].concat.apply([], allSkills);


for(var i = 0; i < allSkills.length; i++)
{
    conArr = conArr.concat(allSkills[i]);
}

//
const res = conArr.filter((currentValue, index, arr) => {
    return arr.indexOf(currentValue) === index; //return unique element of array//true return kore
});

 //var res = [...new Set(conArr)]; //give unique element
console.log(res);

