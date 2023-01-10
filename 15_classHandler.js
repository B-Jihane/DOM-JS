const classHandler = () => {
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

let btn = document.querySelector("button#toggle");
btn.addEventListener('click', classHandler);

