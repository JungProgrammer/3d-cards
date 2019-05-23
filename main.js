const cards = document.querySelectorAll('.card');

for(let i = 0; i < 3; i++){
    cards[i].addEventListener('mousemove', rotate);
    cards[i].addEventListener('mouseout', stopRotate);
}



function rotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight/2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = `rotateX(${-(event.offsetY - halfHeight)/8}deg) rotateY(${(event.offsetX - halfWidth)/8}deg)`;
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotateX(0deg) rotateY(0deg)';
}