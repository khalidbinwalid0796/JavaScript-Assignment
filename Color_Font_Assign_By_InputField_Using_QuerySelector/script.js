
function addProperty(){

    var color = document.getElementById("color_id").value;
    var font = document.getElementById("font_id").value;

    var allRows = document.querySelectorAll('p');
    // set color & font
    allRows.forEach((eachRow) =>
    {
        eachRow.style.color = color;
        eachRow.style.fontSize = font;
    });

}


