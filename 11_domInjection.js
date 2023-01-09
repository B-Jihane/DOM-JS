const p = document.createElement('p');
p.textContent = 'hello world';
const content = document.getElementById('content');
content.insertBefore(p, content.firstChild);