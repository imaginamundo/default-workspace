module.exports = {
    switchLeadImage() {
        const galleryButtons = document.querySelectorAll('[data-fast-gallery]');

        galleryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonsWrap = button.parentElement;
                const galleryButtons = buttonsWrap.querySelectorAll('[data-fast-gallery]');

                galleryButtons.forEach(galleryButton => {
                    galleryButton.classList.remove('product-cart__gallery--selected');
                });

                button.classList.add('product-cart__gallery--selected');

                const leadImage = button.closest('.product-card').querySelector('[data-fast-gallery-lead]');
                leadImage.src = button.querySelector('img').src;
            });
        });
    }
}