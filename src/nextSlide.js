const showNextSlide = (e) => {
    const contentDiv = document.querySelector('#content');
    const pictureDiv = contentDiv.querySelector('.picture-div');
    const imgArr = ['apple', 'clock', 'computer'];
    console.log('Showing next slide...');
    const target = e.target;

    pictureDiv.innerHTML = `<img src="./img/${imgArr[1]}.jpeg"/>`

    target.style.color = 'red';
    setTimeout(() => {
        target.style.color = '#000';
    }, 200);
}

const showPreviousSlide = (e) =>{
    console.log('Showing previous slide...');
    const target = e.target;

    target.style.color = 'red';
    setTimeout(() => {
        target.style.color = '#000';
    }, 200);
}

export {showNextSlide, showPreviousSlide}