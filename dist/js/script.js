/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/addToWishlist.js":
/*!********************************************!*\
  !*** ./src/js/components/addToWishlist.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleWishlistIcon = toggleWishlistIcon;
exports.addToWishlist = addToWishlist;

function toggleWishlistIcon(elem, active) {
  if (active) {
    elem.classList.add('icon--fill');
    return;
  }

  elem.classList.remove('icon--fill');
}

function addToWishlist() {
  var wishlistButton = document.querySelectorAll('[data-wishlist-button]');
  wishlistButton.forEach(function (wishlistButton) {
    wishlistButton.addEventListener('click', function () {
      var wishlistIcon = wishlistButton.querySelector('svg');
      wishlistIcon.classList.toggle('icon--fill');
    });
  });
}

/***/ }),

/***/ "./src/js/components/handleImages.js":
/*!*******************************************!*\
  !*** ./src/js/components/handleImages.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  handleImageErrors: function handleImageErrors() {
    var images = document.querySelectorAll('img');
    images.forEach(function (image) {
      image.addEventListener('error', function () {
        image.src = '/dist/images/placeholder.png';
      });
    });
  }
};

/***/ }),

/***/ "./src/js/components/toggleMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/toggleMenu.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMenu = toggleMenu;

function toggleMenu() {
  var menuButton = document.querySelector('[data-menu-button]');
  menuButton.addEventListener('click', function () {
    var dynamicCart = document.querySelector('[data-dynamic-cart]');
    dynamicCart.classList.toggle('dynamic-cart--oppened');
  });
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toggleMenu = __webpack_require__(/*! ./components/toggleMenu */ "./src/js/components/toggleMenu.js");

var _addToWishlist = __webpack_require__(/*! ./components/addToWishlist.js */ "./src/js/components/addToWishlist.js");

var _handleImages = __webpack_require__(/*! ./components/handleImages */ "./src/js/components/handleImages.js");

console.log('Buscapé');
window.projectData = {}; // Menu

(0, _toggleMenu.toggleMenu)(); // Wishlist

(0, _addToWishlist.addToWishlist)(); // Handle image loading errors

(0, _handleImages.handleImageErrors)();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map