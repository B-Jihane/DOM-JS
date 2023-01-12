
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    setTimeout(() => {
        let p = document.createElement('p');
        p.innerHTML = "add-me";
        document.body.appendChild(p);
    }, 2000);
});