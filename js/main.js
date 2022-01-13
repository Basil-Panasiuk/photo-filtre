let filters = document.querySelectorAll('.filter');

filters.forEach(elem => elem.addEventListener('input', function(){
    elem.nextElementSibling.value = elem.value;
    let suffix = elem.dataset.sizing;
    document.documentElement.style.setProperty(`--${elem.name}`, elem.value + suffix);
}));

let btnReset = document.querySelector('.btn-reset');

btnReset.addEventListener('click', function(){
    filters.forEach(elem => {
        let suffix = elem.dataset.sizing;

        if(elem.name == 'saturate') {
            elem.value = 100;
            document.documentElement.style.setProperty(`--${elem.name}`, elem.value + suffix);
        } else {
            elem.value = 0;
            document.documentElement.style.setProperty(`--${elem.name}`, elem.value + suffix);
        }

        elem.nextElementSibling.value = elem.value;
    });
});

let btnFS = document.querySelector('.fullscreen');

btnFS.addEventListener('click', toggleFullScreen);

function toggleFullScreen(){
    if(document.fullscreenElement){
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}