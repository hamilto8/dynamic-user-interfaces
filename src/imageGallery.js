const imageGallery = () => {
    const galleryDiv = document.createElement('div');
        galleryDiv.classList.add('image-gallery');
        galleryDiv.innerHTML = `
        <p>Images Go Here</p>
        `;
    return galleryDiv
}

export default imageGallery