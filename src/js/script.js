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
