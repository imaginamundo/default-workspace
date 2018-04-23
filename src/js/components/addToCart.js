import { formatInstallments, formatSpotPrice } from '../../../helpers/string';

module.exports = {
    addToCart() {
        const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
        addToCartButtons.forEach(addToCartButton => {
            addToCartButton.addEventListener('click', () => {
                const productDataString = addToCartButton.closest('[data-product-details]').dataset.productDetails;
                const productData = JSON.parse(productDataString);

                module.exports.updateCartObject(productData);
                module.exports.updateDynamicCart();
            });
        });
    },
    updateCartObject({ id, name, images: [ image ], price: { value, installments, installmentValue } }) {
        const productData = {
            id: id,
            name: name,
            image: image,
            value: value,
            installments: installments,
            installmentValue: installmentValue,
            quantity: 1
        };
        if (projectData) {
            if (projectData.dynamicCart) {
                if (projectData.dynamicCart[id]) {
                    projectData.dynamicCart[id].quantity++;
    
                    return;
                }
                projectData.dynamicCart[id] = productData;
                return;
            }
            projectData.dynamicCart = {};
            projectData.dynamicCart[id] = productData;
            return;
        }
        window.projectData = {
            dynamicCart: { }
        }
        projectData.dynamicCart[id] = productData;
    },
    updateDynamicCart() {
        const dynamicCartMessage = document.querySelector('[data-dynamic-cart-empty]');
        const legacyProducts = document.querySelector('[data-dynamic-cart-products]');
        if (legacyProducts) {
            legacyProducts.remove();
        }

        if (projectData.dynamicCart && Object.keys(projectData.dynamicCart).length) {
            dynamicCartMessage.setAttribute('hidden', '');

            const productsWrap = document.createElement('div');
            productsWrap.dataset.dynamicCartProducts = '';

            let quantityLabel = 0;

            for (let key in projectData.dynamicCart) {
                const { id, name, image, quantity, value, installments, installmentValue } = projectData.dynamicCart[key];
                const productTemplate = document.querySelector('[template-dynamic-cart]').cloneNode(true);
                productTemplate.classList.remove('template');
                productTemplate.dataset.productId = id;

                quantityLabel = quantityLabel + quantity;

                const templateRemoveFromCart = productTemplate.querySelector('[template-remove-from-cart]');
                templateRemoveFromCart.addEventListener('click', () => {
                    module.exports.removeFromCart(id);
                });

                const templateImage = productTemplate.querySelector('[template-image]');
                templateImage.src = image;

                const templateName = productTemplate.querySelector('[template-name]');
                templateName.textContent = `${ name } (${ quantity })`;

                const installmentsString = formatInstallments(installments, installmentValue);
                const templateInstallments = productTemplate.querySelector('[template-installments]');
                templateInstallments.textContent = installmentsString;

                const valueString = formatSpotPrice(value);
                const templateValue = productTemplate.querySelector('[template-price]');
                templateValue.textContent = valueString;

                productsWrap.appendChild(productTemplate);
            }

            const dynamicCart = document.querySelector('[data-dynamic-cart]');

            dynamicCart.appendChild(productsWrap);

            module.exports.updateMenuQuantityLabel(quantityLabel);
            module.exports.updateDynamicCartSubtotal(projectData);

            return;
        }
        dynamicCartMessage.removeAttribute('hidden');
    },
    updateDynamicCartSubtotal() {
        const { dynamicCart: products } = projectData;

        let totalValue = 0;
        let minInstallments = 20;

        for (let key in products) {
            totalValue = totalValue + products[key].value * products[key].quantity;
            minInstallments = Math.min(minInstallments, products[key].installments);
        }

        const subtotalTemplate = document.querySelector('[template-dynamic-cart-subtotal]').cloneNode(true);
        subtotalTemplate.classList.remove('template');

        const installmentsValue = totalValue / minInstallments;
        const installmentsString = formatInstallments(minInstallments, installmentsValue);
        const templateInstallments = subtotalTemplate.querySelector('[template-installments]');
        templateInstallments.textContent = installmentsString;

        const valueString = formatSpotPrice(totalValue);
        const templatePrice = subtotalTemplate.querySelector('[template-price]');
        templatePrice.textContent = valueString;

        const dynamicCart = document.querySelector('[data-dynamic-cart-products]');

        dynamicCart.appendChild(subtotalTemplate);     
    },
    updateMenuQuantityLabel(amount) {
        const menuLabel = document.querySelector('[data-menu-label]');

        menuLabel.textContent = amount;
    },
    removeFromCart(sku) {
        delete projectData.dynamicCart[sku];

        module.exports.updateDynamicCart(projectData);
    }
}