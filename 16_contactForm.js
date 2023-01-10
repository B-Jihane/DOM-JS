const inputs = document.querySelectorAll("input");
let nom = inputs["name"];
let age = inputs["age"];
let birthdate = inputs["birthdate"];

const p = document.createElement('p');
p.id = "result";
p.textContent = 'name: ' + nom +', age: ' + age + ', birthdate: ' + birthdate ;

const content = document.querySelector('body');
content.insertBefore(p, content.lastChild);
