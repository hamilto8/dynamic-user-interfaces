import {showNextSlide, showPreviousSlide} from './nextSlide';

const imageGallery = () => {
    const imgArr = ['apple', 'clock', 'computer'];
    const galleryDiv = document.createElement('div');
        galleryDiv.classList.add('image-gallery');

    const logoImage = document.createElement('div');
        logoImage.innerHTML =  `<i class="far fa-images"></i>`;
        logoImage.classList.add('logo-image');

        galleryDiv.appendChild(logoImage);

    const pictureDiv = document.createElement('div');
        pictureDiv.classList.add('picture-div');

        pictureDiv.innerHTML = `<img data-index="0" src="./img/${imgArr[0]}.jpeg"/>`

    const controlPanel = document.createElement('div');
        controlPanel.classList.add('control-panel');
        
    const leftArrow = document.createElement('p');
        leftArrow.innerHTML = `<i class="fas fa-arrow-left left-key"></i>`;
        leftArrow.addEventListener('click', showPreviousSlide);
        leftArrow.addEventListener('keydown', e =>{
            if(e.code === 37){
                console.log('left arrow hit');
            }
        });

    const rightArrow = document.createElement('p');
        rightArrow.innerHTML = `<i class="fas fa-arrow-right right-key"></i>`;
        rightArrow.addEventListener('click', showNextSlide);
        rightArrow.addEventListener('keypress', showNextSlide);

        controlPanel.appendChild(leftArrow);
        controlPanel.appendChild(rightArrow);

        galleryDiv.appendChild(pictureDiv);
        galleryDiv.appendChild(controlPanel);

    return galleryDiv
}

export default imageGallery