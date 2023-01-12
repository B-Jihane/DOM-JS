let square = document.getElementById("square");

let x = 0;
let y = 0;

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft"){
        //Left
        x -= 10;
    }else if (event.key === "ArrowUp"){
        //Up
        y -= 10;
    }else if (event.key === "ArrowRight"){
        //Right
        x += 10;
    }else if (event.key === "ArrowDown"){
        //Down
        y += 10;
    }
    square.style.left = x + "px";
    square.style.top = y + "px";
});


