const btn = document.querySelector("button");
btn.addEventListener("click", async function (){
    await new Promise(resolve => setTimeout(resolve, 2000))
    .then(() => {
        let p = document.createElement("p");
        p.textContent = "add-me";
        document.body.appendChild(p);
    });
});

