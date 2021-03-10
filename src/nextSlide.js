const showNextSlide = (e) => {
    console.log('Showing next slide...');
    const target = e.target;

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