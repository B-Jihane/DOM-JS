
function addDates () {
    let p = document.createElement('p');
    let date = new Date();
    p.textContent = "Date: " + date;
    const content = document.querySelector('body');
    content.insertBefore(p, content.lastChild);
}

/* for(let i=0; i < 12; i++) {
    console.log(addDates());
} */

window.onscroll = function() {
    // innerHeight : permet d'avoir la heauteur de la partie visible de la fenêtre de navigation.
    // scrollY : represente le nombre de px scolé verticalement
    // offsetHeight : permet d'avoir la hauteur de body
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log(addDates());
    }
  };




