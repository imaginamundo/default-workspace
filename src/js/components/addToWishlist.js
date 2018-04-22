export function toggleWishlistIcon(elem, active) {
    if (active) {
        elem.classList.add('icon--fill');

        return;
    }
    elem.classList.remove('icon--fill');
}

export function addToWishlist() {
    const wishlistButton = document.querySelector('[data-wishlist-button]');

    wishlistButton.addEventListener('click', function() {
        const wishlistIcon = this.querySelector('svg');

        wishlistIcon.classList.toggle('icon--fill');
    });
}