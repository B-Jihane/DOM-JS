function parentAccess (node){
    return node.parentNode;
}
const element = document.querySelector('p');
const parent = parentAccess(element);
console.log(parent)

module.exports = parentAccess;