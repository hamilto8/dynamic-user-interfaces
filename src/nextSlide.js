import imgArr from './imageArr';

const showNextSlide = (e) => {
    const contentDiv = document.querySelector('#content');
    const pictureDiv = contentDiv.querySelector('.picture-div');
    const previousImage = pictureDiv.querySelector('img');
    let imageIdx = parseInt(pictureDiv.dataset.index);
    
    console.log('Showing next slide...');
    console.log(imageIdx);
    const target = e.target;


    pictureDiv.removeChild(previousImage);
    const nextImage = document.createElement('img');

    if(imageIdx + 1 >= imgArr.length){
        nextImage.src = `./img/${imgArr[0]}.jpeg`;
        pictureDiv.dataset.index = 0;
    } else {
        nextImage.src = `./img/${imgArr[imageIdx+1]}.jpeg`;
        imageIdx += 1;
        pictureDiv.dataset.index = imageIdx;
        console.log(pictureDiv.dataset.index);
    }

    pictureDiv.appendChild(nextImage);

    target.style.color = 'red';
    setTimeout(() => {
        target.style.color = '#000';
    }, 200);
}

const showPreviousSlide = (e) =>{
    const contentDiv = document.querySelector('#content');
    const pictureDiv = contentDiv.querySelector('.picture-div');
    const currentImage = pictureDiv.querySelector('img');
    let imageIdx = parseInt(pictureDiv.dataset.index);

    console.log('Showing previous slide...');
    const target = e.target;

    const previousImage = document.createElement('img');
    pictureDiv.removeChild(currentImage);

    if(imageIdx - 1 < 0){
        imageIdx = imgArr.length-1;
        previousImage.src = `./img/${imgArr[imageIdx]}.jpeg`;
        pictureDiv.dataset.index = imageIdx;
    } else {
        imageIdx -=1;
        previousImage.src = `./img/${imgArr[imageIdx]}.jpeg`;
        pictureDiv.dataset.index = imageIdx;
    }

    pictureDiv.appendChild(previousImage);

    target.style.color = 'red';
    setTimeout(() => {
        target.style.color = '#000';
    }, 200);
}

export {showNextSlide, showPreviousSlide}