// import mainPage from './mainPage';

const contentDiv = document.querySelector('#content');
const homeTab = document.querySelector('.home-tab');
const blogTab = document.querySelector('.blog-tab');
const aboutTab = document.querySelector('.about-tab');

homeTab.addEventListener('click', showHome);
aboutTab.addEventListener('click', showAbout);
blogTab.addEventListener('click', showBlog);

function showHome() {
    console.log("Showing home...");
};

function showBlog() {
    console.log('Showing blog...');
};

function showAbout()  {
    console.log('Showing about...');
};

// document.onload = contentDiv.appendChild(mainPage());