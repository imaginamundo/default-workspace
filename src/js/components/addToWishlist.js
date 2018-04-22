export function toggleWishlistIcon(elem, active) {
    if (active) {
        elem.classList.add('icon--fill');

        return;
    }
    elem.classList.remove('icon--fill');
}

export function addToWishlist() {
    const wishlistButton = document.querySelectorAll('[data-wishlist-button]');

    wishlistButton.forEach(wishlistButton => {
        wishlistButton.addEventListener('click', () => {
            const wishlistIcon = wishlistButton.querySelector('svg');

            wishlistIcon.classList.toggle('icon--fill');
        });
    })
}