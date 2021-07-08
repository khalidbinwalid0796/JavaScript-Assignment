function addName(){
    document.getElementById('error').innerHTML = '';

    let name = document.getElementById('name').value;

    if(name == ''){
        document.getElementById('error').innerHTML = "Please inter value";
    }else{
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;

        let a = document.createElement('a');
        a.textContent = "  Delete";
        a.href="javascript:void(0)";
        li.appendChild(a);

        let pos =  box.firstElementChild;
        if(pos == null){
            box.appendChild(li);
        }else{
            box.insertBefore(li,pos);
        }
    }

    document.getElementById('name').value = '';

}

var btn = document.getElementById('box');
btn.addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.target.parentNode);
    let li = e.target.parentNode;
    li.remove();
    //btn.removeChild(li);
});