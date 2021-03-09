import showNextSlide from './nextSlide';

const imageGallery = () => {
    const galleryDiv = document.createElement('div');
    // <i class="far fa-images"></i>
        galleryDiv.classList.add('image-gallery');
    const leftArrow = document.createElement('p');
        leftArrow.innerHTML = `<i class="fas fa-arrow-left left-key"></i>`;
        leftArrow.addEventListener('click', showNextSlide);
        leftArrow.addEventListener('keydown', e =>{
            if(e.code === 37){
                console.log('left arrow hit');
            }
        });
    const rightArrow = document.createElement('p');
        rightArrow.innerHTML = `<i class="fas fa-arrow-right right-key"></i>`;
        rightArrow.addEventListener('click', showNextSlide);
        rightArrow.addEventListener('keypress', showNextSlide);
        galleryDiv.appendChild(leftArrow);
        galleryDiv.appendChild(rightArrow);
    return galleryDiv
}

export default imageGallery