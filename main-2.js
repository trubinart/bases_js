
function changePicture(){
    changePicture = document.querySelector('.change')
    .addEventListener('click', (e) => {
        let popup = document.querySelector('.img_change');
        if (popup.getAttribute('src') === 'img/1.jpg'){
            popup.setAttribute('src', 'img/2.jpg')
        }
        else {
            popup.setAttribute('src', 'img/1.jpg')
        }
    })
}

changePicture()

let picture = document.querySelector('.picture');
let productCard = document.querySelector('.productCard');
let windows = document.querySelector('.popup');
let buttom = document.querySelector('.change');

picture.addEventListener('click', (e) =>{
    productCard.style.display = 'none';
    windows.style.display = 'inline';
    buttom.style.display = 'inline'
})
