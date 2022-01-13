let base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
var now = new Date();
let photo = document.querySelector('.photo');
let btnNext = document.querySelector('.btn-next');
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
const hour = now.getHours();
if(hour >=6 && hour <=11) {
    base += 'morning/';
} else if (hour >=12 && hour <=17) {
    base += 'day/';
} else if (hour >=16 && hour <=23) {
    base += 'evening/';
} else if (hour >=0 && hour <=5) {
    base += 'night/';
}

let i = 1;
btnNext.addEventListener('click', function(){
    photo.src = base + images[i];
    i++;
    if(i > 18) {
        i = 0;
    }
});

