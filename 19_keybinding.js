let square = document.getElementById("square");

let x = 0;
let y = 0;

document.addEventListener("keydown", function (event) {
    if (event.key === 37){
        //Left
        x -= 10;
    }else if (event.key == 38){
        //Up
        y -= 10;
    }else if (event.key === 39){
        //Right
        x += 10;
    }else if (event.key === 40){
        //Down
        y += 10;
    }
    square.style.left = x + "px";
    square.style.top = y + "px";
});


