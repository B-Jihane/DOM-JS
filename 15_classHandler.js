const classHandler = () => {
    let element = document.getElementById("modal");
    let isOpen = document.getElementsByClassName("is-open");
    if (isOpen.length > 0) {
        element.classList.remove("is-open");
    }
    else {
        element.classList.add("is-open");
    }
}

/* const classHandler = () => {
    const isOpen = document.getElementsByClassName("is-open");
    let isOpenModal = [];
    for (let io of isOpen){
        if (io.parentElement === document.querySelector('div#modal')){
            isOpenModal.push(io);
        }
    }
    for (let iom of isOpenModal){
        if (iom.style.display === 'none'){
            iom.style.display = 'block';
        } else {
            iom.style.display = 'none';
        }
    }
}
*/

let btn = document.querySelector("button#toggle");
btn.addEventListener('click', classHandler);

