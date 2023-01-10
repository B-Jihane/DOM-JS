const inputs = document.getElementsByTagName("input");
let pArray = [];
for (let i = 0; i < inputs.length; i++) {
    pArray.push(inputs[i].name + ": " + inputs[i].value);
  }

const p = document.createElement('p');
p.id = "result";
p.textContent = pArray.toString();

const content = document.querySelector('body');
content.insertBefore(p, content.lastChild);




/* let nom = inputs["name"];
let age = inputs["age"];
let birthdate = inputs["birthdate"];

const p = document.createElement('p');
p.id = "result";
p.textContent = 'name: ' + nom +', age: ' + age + ', birthdate: ' + birthdate ;

const content = document.querySelector('body');
content.insertBefore(p, content.lastChild); */


