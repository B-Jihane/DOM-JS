let buttons = document.querySelectorAll("button");
for (let bt in buttons){
    if (bt.classList.contains("danger")){
        bt.style.backgroundColor = "red";
    } else if (bt.classList.contains("warning")){
        bt.style.backgroundColor = "yellow";
    }else if (bt.classList.contains("secondary")){
        bt.style.backgroundColor = "grey";
    }else {
        bt.style.backgroundColor = "blue";
    }
}