const blogPage = () => {
    const blogPageDiv = document.createElement('div');
        blogPageDiv.classList.add('blog-page');
        blogPageDiv.innerHTML = `Here is my blog LoL`;
    return blogPageDiv;
}

export default blogPage