let buttons = document.querySelectorAll("button");
for (let i=0; i < buttons.length; i++){
    let bt = buttons[i];
    if (bt.classList.contains("danger")){
        bt.style.backgroundColor = "red";
    } else if (bt.classList.contains("warning")){
        bt.style.backgroundColor = "yellow";
    }else if (bt.classList.contains("secondary")){
        bt.style.backgroundColor = "grey";
    }else if (bt.classList.contains("btn")){
        bt.style.backgroundColor = "blue";
    }
}