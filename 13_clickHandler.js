const button = document.querySelector("button#clickme");
const divContent = document.querySelector(div.content);
button.addEventListener('click', function() {
    const p = document.createElement('p');
    p.id = 'result';
    p.innerHTML = 'clicked';
    divContent.appendChild(p);
  });