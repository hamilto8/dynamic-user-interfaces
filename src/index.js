import mainPage from './mainPage';
import imageGallery from './imageGallery';
import {showNextSlide, showPreviousSlide} from './nextSlide';

const contentDiv = document.querySelector('#content');
const homeTab = document.querySelector('.home-tab');
const blogTab = document.querySelector('.blog-tab');
const aboutTab = document.querySelector('.about-tab');
const galleryLink = document.querySelector('.gallery-link');
const galleryLinkMobile = document.querySelector('.gallery-link-mobile');

homeTab.addEventListener('click', showHome);
aboutTab.addEventListener('click', showAbout);
blogTab.addEventListener('click', showBlog);
galleryLink.addEventListener('click', showGallery);
galleryLinkMobile.addEventListener('click', showGallery);

function showHome() {
    console.log("Showing home...");
};

function showBlog() {
    console.log('Showing blog...');
};

function showAbout()  {
    console.log('Showing about...');
};

function showGallery() {
    const mainPage = contentDiv.querySelector('.main-page');
    contentDiv.removeChild(mainPage);
    contentDiv.appendChild(imageGallery());
}

document.onload = contentDiv.appendChild(mainPage());