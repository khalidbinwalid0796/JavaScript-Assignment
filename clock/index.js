setInterval(()=>{
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`

},1000);

// hour calculate

// 12 hours = 360 degree
// 1 hour = 30 degree
// h hours = 30h degree

// 60 min = 30 degree
// 1 min = 1/2 degree
// m min = m/2 degree
// hrotation = 30*htime + mtime/2;


//min calculate
//60 minutes = 360 degree
//1 minute = 6 degree
//m minutes = 6h degree



//sec calculate
//60 sec = 360 degree
//1 sec = 6 degree
//s sec = 6s degree