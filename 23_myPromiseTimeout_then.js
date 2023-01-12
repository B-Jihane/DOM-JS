const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const button = document.querySelector('button');
button.addEventListener('click', async () => {
    return sleep(2000)
    .then(() => {
        let p = document.createElement('p');
        p.textContent = 'add-me';
        document.body.appendChild(p);
    });
});

