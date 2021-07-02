let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var pretext = document.getElementById("word").value;

    // constructor function
    function Convert () { }

    const word = new Convert();

// Using Object Prototype
    Convert.prototype.wordConvert = function(str) {

        let len = str.length;
        var ck = str;

        for (let i=0; i<len; i++){
            //check space
            if (ck.charAt(i) == ' '){
                var rt = ck.replace(ck.charAt(i),'_');
                ck = rt;
            }

            //check @
            else if (ck.charAt(i) == '@'){
                var rt1 = ck.replace(ck.charAt(i),'_');
                ck = rt1;
            }
            //check '('
            else if (ck.charAt(i) == '('){
                var rt2 = ck.replace(ck.charAt(i),'_');
                ck = rt2;
            }
            //convert lowercase
            else{
                var rt3 = ck.toLowerCase();
                ck = rt3;
            }

        }
        return ck;
    }

    let res1 = word.wordConvert(pretext);
    document.getElementById("demo").innerHTML=res1;

});

