//1st way
function loadTableData(data){
    var table = document.createElement('table');
    table.setAttribute('border','1');

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var text1 = document.createTextNode("User_ID");
    var text2 = document.createTextNode("ID");
    var text3 = document.createTextNode("Title");
    var text4 = document.createTextNode("Description");

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);

    for (var i = 0; i<data.length; i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        var text1 = document.createTextNode(data[i].id);
        var text2 = document.createTextNode(data[i].userId);
        var text3 = document.createTextNode(data[i].title);
        var text4 = document.createTextNode(data[i].body);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }
    document.body.appendChild(table);
};


//2nd way
// function loadTableData(data){
//     let dataHtml = '';
//     dataHtml += `<tr><td>User_ID</td><td>ID</td><td>Title</td><td>Description</td></tr>`
//
//     for (var i = 0; i<data.length; i++){
//         dataHtml += `<tr><td>${data[i].userId}</td><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`
//     }
//
//     document.write('<table style="width:100%" border ="1" >' +dataHtml+ '</table>')
// };


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return (response.json());
    })
    .then((response) =>{
        console.log(response);
        loadTableData(response);
    });