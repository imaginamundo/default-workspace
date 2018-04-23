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

/***/ "./helpers/number.js":
/*!***************************!*\
  !*** ./helpers/number.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  formatCurrency: function formatCurrency(num) {
    var currency = num.toLocaleString('pt-br', {
      minimumFractionDigits: 2
    });
    return currency;
  }
};

/***/ }),

/***/ "./src/js/components/addToCart.js":
/*!****************************************!*\
  !*** ./src/js/components/addToCart.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _number = __webpack_require__(/*! ../../../helpers/number */ "./helpers/number.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = {
  addToCart: function addToCart() {
    var addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
    addToCartButtons.forEach(function (addToCartButton) {
      addToCartButton.addEventListener('click', function () {
        var _JSON$parse = JSON.parse(addToCartButton.closest('[data-product-details]').dataset.productDetails),
            id = _JSON$parse.id,
            name = _JSON$parse.name,
            _JSON$parse$images = _slicedToArray(_JSON$parse.images, 1),
            image = _JSON$parse$images[0],
            _JSON$parse$price = _JSON$parse.price,
            value = _JSON$parse$price.value,
            installments = _JSON$parse$price.installments,
            installmentValue = _JSON$parse$price.installmentValue;

        var productData = {
          id: id,
          name: name,
          image: image,
          value: value,
          installments: installments,
          installmentValue: installmentValue,
          quantity: 1
        };

        if (projectData.dynamicCart) {
          if (projectData.dynamicCart[id]) {
            projectData.dynamicCart[id].quantity++;
            module.exports.updateDynamicCart(projectData);
            return;
          }

          projectData.dynamicCart[id] = productData;
          module.exports.updateDynamicCart(projectData);
          return;
        }

        projectData.dynamicCart = {};
        projectData.dynamicCart[id] = productData;
        module.exports.updateDynamicCart(projectData);
      });
    });
  },
  updateDynamicCart: function updateDynamicCart(data) {
    var dynamicCartMessage = document.querySelector('[data-dynamic-cart-empty]');

    if (data.dynamicCart && Object.keys(data.dynamicCart).length) {
      dynamicCartMessage.setAttribute('hidden', '');
      var legacyProducts = document.querySelector('[data-dynamic-cart-products]');

      if (legacyProducts) {
        legacyProducts.remove();
      }

      var productsWrap = document.createElement('div');
      productsWrap.dataset.dynamicCartProducts = '';
      var quantityLabel = 0;

      for (var key in data.dynamicCart) {
        var _data$dynamicCart$key = data.dynamicCart[key],
            id = _data$dynamicCart$key.id,
            name = _data$dynamicCart$key.name,
            image = _data$dynamicCart$key.image,
            quantity = _data$dynamicCart$key.quantity,
            value = _data$dynamicCart$key.value,
            installments = _data$dynamicCart$key.installments,
            installmentValue = _data$dynamicCart$key.installmentValue;
        var productTemplate = document.querySelector('[template-dynamic-cart]').cloneNode(true);
        productTemplate.classList.remove('template');
        quantityLabel = quantityLabel + quantity;
        var templateImage = productTemplate.querySelector('[template-dynamic-cart-image]');
        templateImage.src = image;
        var templateName = productTemplate.querySelector('[template-dynamic-cart-name]');
        templateName.textContent = name;
        var formatedInstallmentValue = (0, _number.formatCurrency)(value);
        var installmentsString = "".concat(installments, "x de R$ ").concat(formatedInstallmentValue, " ");
        var templateInstallments = productTemplate.querySelector('[template-dynamic-cart-installments]');
        templateInstallments.textContent = installmentsString;
        var formatedValue = (0, _number.formatCurrency)(value);
        var valueString = "R$ ".concat(formatedValue, " \xE0 vista");
        var templateValue = productTemplate.querySelector('[template-dynamic-cart-price]');
        templateValue.textContent = valueString;
        productsWrap.appendChild(productTemplate);
      }

      var dynamicCart = document.querySelector('[data-dynamic-cart]');
      dynamicCart.appendChild(productsWrap);
      module.exports.updateMenuQuantityLabel(quantityLabel);
      return;
    }

    dynamicCartMessage.removeAttribute('hidden');
  },
  updateMenuQuantityLabel: function updateMenuQuantityLabel(amount) {
    var menuLabel = document.querySelector('[data-menu-label]');
    menuLabel.textContent = amount;
  }
};

/***/ }),

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

/***/ "./src/js/components/productCardGallery.js":
/*!*************************************************!*\
  !*** ./src/js/components/productCardGallery.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  switchLeadImage: function switchLeadImage() {
    var galleryButtons = document.querySelectorAll('[data-fast-gallery]');
    galleryButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var buttonsWrap = button.parentElement;
        var galleryButtons = buttonsWrap.querySelectorAll('[data-fast-gallery]');
        galleryButtons.forEach(function (galleryButton) {
          galleryButton.classList.remove('product-cart__gallery--selected');
        });
        button.classList.add('product-cart__gallery--selected');
        var leadImage = button.closest('.product-card').querySelector('[data-fast-gallery-lead]');
        leadImage.src = button.querySelector('img').src;
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

var _productCardGallery = __webpack_require__(/*! ./components/productCardGallery */ "./src/js/components/productCardGallery.js");

var _addToCart = __webpack_require__(/*! ./components/addToCart */ "./src/js/components/addToCart.js");

console.log('Buscapé');
window.projectData = {}; // Menu

(0, _toggleMenu.toggleMenu)(); // Wishlist

(0, _addToWishlist.addToWishlist)(); // Handle image loading errors

(0, _handleImages.handleImageErrors)(); // Product card gallery

(0, _productCardGallery.switchLeadImage)(); // Add to cart

(0, _addToCart.addToCart)();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map