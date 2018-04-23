console.log('Buscapé');

window.projectData = {};

// Menu
import { toggleMenu } from './components/toggleMenu';
toggleMenu();

// Wishlist
import { addToWishlist } from './components/addToWishlist.js';
addToWishlist();

// Handle image loading errors
import { handleImageErrors } from './components/handleImages';
handleImageErrors();

// Product card gallery
import { switchLeadImage } from './components/productCardGallery';
switchLeadImage();

// Add to cart
import { addToCart } from './components/addToCart';
addToCart();