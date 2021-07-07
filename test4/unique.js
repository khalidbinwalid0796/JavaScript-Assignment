const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];

const res = conArr.filter((currentValue, index, arr) => {
    return ages.indexOf(currentValue) === index; //return unique element of array//true return kore
});

console.log(res);
