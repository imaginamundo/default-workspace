export function toggleMenu() {
    const menuButton = document.querySelector('[data-menu-button]');

    menuButton.addEventListener('click', () => {
        const dynamicCart = document.querySelector('[data-dynamic-cart]');
        
        dynamicCart.classList.toggle('dynamic-cart--oppened');
    });
}