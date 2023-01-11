let square = document.getElementById("square");

let x = 0;
let y = 0;

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37){
        //Left
        x -= 10;
    }else if (event.keyCode == 38){
        //Up
        y -= 10;
    }else if (event.keyCode === 39){
        //Right
        x += 10;
    }else if (event.keyCode === 40){
        //Down
        y += 10;
    }
    square.style.left = x + "px";
    square.style.top = y + "px";
});


