function childrenAccess(){
    return document.getElementById("menu").firstElementChild.textContent;

}

console.log(childrenAccess());


module.exports = childrenAccess;