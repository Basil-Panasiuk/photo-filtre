const fileInput = document.querySelector('input[type="file"]');
let uploadPic = document.querySelector('.photo');

fileInput.addEventListener('change', function(e){
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        uploadPic.src = reader.result;
    }
    reader.readAsDataURL(file);
});