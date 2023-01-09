let button = document.querySelector("button#clickme");
button.addEventListener('click', () => {
    let p = document.createElement('p');
    p.textContent = 'clicked';
    document.querySelector("div.content").appendChild(p);
  });