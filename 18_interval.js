function horloge(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    p.innerHTML = day +"/" +month+"/" +year+" " +hour+":" +minute+":" +second ;
    document.body.appendChild(p);
}

let p = document.createElement("p");

setInterval(horloge, 1000);