function parentAccess (node){
    return node.parentNode;
}
console.log(parentAccess("Home"));

module.exports = parentAccess;