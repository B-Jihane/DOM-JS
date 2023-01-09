const hoverHandler = () => {
    let p = document.createElement('p');
    p.id = "result";
    p.textContent = 'hovered';
    document.querySelector("div.content").appendChild(p);
}

let p = document.querySelector('p#hoverme');
p.addEventListener('mouseover', hoverHandler)
