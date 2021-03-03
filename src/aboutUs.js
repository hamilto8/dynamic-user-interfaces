const aboutUs = () => {
    const aboutUsDiv = document.createElement('div');
        aboutUsDiv.classList.add('about-us');
        aboutUsDiv.innerHTML = `We are the leading manufacturer of things`;
    return aboutUsDiv;
}

export default aboutUs