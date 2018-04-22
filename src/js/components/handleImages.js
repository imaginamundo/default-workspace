module.exports = {
    handleImageErrors() {
        const images = document.querySelectorAll('img');

        images.forEach(image => {
            image.addEventListener('error', () => {
                image.src = '/dist/images/placeholder.png';
            });
        });
    }
}