let form = document.querySelector('form');

// constructor function
function Convert () { }

Convert.prototype ={
    // Using Object Prototype
    wordConvert(str){

        let len = str.length;
        var ck = str;

        for (let i=0; i<len; i++){
            var charValue = ck.charCodeAt(i);
            if ((charValue >= 65 && charValue <= 90) || (charValue >= 97 && charValue <= 122)){
                ck = ck;
            }else{
                var rt1 = ck.replace(ck.charAt(i),'_');
                ck = rt1;
            }

        }
        return ck;

    }

}

form.addEventListener('submit',function(event){
    event.preventDefault();
    var pretext = document.getElementById("word").value;


    const word = new Convert();
    let res1 = word.wordConvert(pretext);
    document.getElementById("demo").innerHTML=res1;
});

