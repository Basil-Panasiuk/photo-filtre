let canvas = document.querySelector('.canvas');
let btnSave = document.querySelector('.btn-save');
let pic = document.querySelector('.photo');


btnSave.addEventListener('click', function(){
    let filters = document.querySelectorAll('.filter');
    const img = new Image();  
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = pic.src;
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.filter = `blur(${filters[0].value}px) invert(${filters[1].value}%) sepia(${filters[2].value}%) saturate(${filters[3].value}%) hue-rotate(${filters[4].value}deg)`;
        ctx.drawImage(img, 0, 0);

        var link = document.createElement('a');
        link.download = 'download.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
    }; 
});