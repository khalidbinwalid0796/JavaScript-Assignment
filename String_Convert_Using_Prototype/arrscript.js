let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var pretext = document.getElementById("word").value;

    // constructor function
    function Convert () { }

    Convert.prototype ={
        // Using Object Prototype

        wordConvert(str){

            let len = str.length;
            var ck = str;
            var schar = new Array('@',' ','(',')');

            for (let i=0; i<len; i++){

                let res = ck.replaceAll(schar[i], '_');
                ck = res;

            }
            return ck;
        }

    }
    const word = new Convert();
    let res1 = word.wordConvert(pretext);
    document.getElementById("demo").innerHTML=res1;
});

