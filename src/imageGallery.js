import {showNextSlide, showPreviousSlide} from './nextSlide';
import imgArr from './imageArr';

const imageGallery = () => {
    
    const galleryDiv = document.createElement('div');
        galleryDiv.classList.add('image-gallery');

    const logoImage = document.createElement('div');
        logoImage.innerHTML =  `<i class="far fa-images"></i>`;
        logoImage.classList.add('logo-image');

        galleryDiv.appendChild(logoImage);

    const pictureDiv = document.createElement('div');
        pictureDiv.classList.add('picture-div');
        pictureDiv.dataset.index = 0;

        const image = document.createElement('img');
            image.src = `./img/${imgArr[0]}.jpeg`;

        pictureDiv.appendChild(image);

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