const imageGallery = () => {
    const galleryDiv = document.createElement('div');
        galleryDiv.classList.add('image-gallery');
        galleryDiv.innerHTML = `
        <i class="far fa-images"></i>
        <p>Images Go Here</p>
        `;
    return galleryDiv
}

export default imageGallery