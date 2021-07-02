let rst = 0;
function addColor(){
// get all even rows
    var evenRows = document.querySelectorAll('p:nth-child(even)');
// get all odd rows
    var oddRows = document.querySelectorAll('p:nth-child(odd)');

// set even color
    evenRows.forEach((evenRow) =>
    {
        evenRow.style.color = 'red';
    });

// set odd rows color
    oddRows.forEach((oddRow) =>
    {
        oddRow.style.color = 'blue';
    });

    rst = 1;
}

function reset(){
    // get all even rows
    var evenRows = document.querySelectorAll('p:nth-child(even)');
// get all odd rows
    var oddRows = document.querySelectorAll('p:nth-child(odd)');

// set even color
    evenRows.forEach((evenRow) =>
    {
        evenRow.style.color = '';
    });

// set odd rows color
    oddRows.forEach((oddRow) =>
    {
        oddRow.style.color = '';
    });

    rst= 0 ;
}
