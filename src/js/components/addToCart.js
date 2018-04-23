import { formatCurrency } from '../../../helpers/number';

module.exports = {
    addToCart() {
        const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
        addToCartButtons.forEach(addToCartButton => {
            addToCartButton.addEventListener('click', () => {
                const { 
                    id,
                    name,
                    images: [
                        image
                    ],
                    price: { value, installments, installmentValue }
                } = JSON.parse(addToCartButton.closest('[data-product-details]').dataset.productDetails);

                const productData = {
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
                        projectData.dynamicCart[id].quantity++

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
    updateDynamicCart(data) {
        const dynamicCartMessage = document.querySelector('[data-dynamic-cart-empty]');
        if (data.dynamicCart && Object.keys(data.dynamicCart).length) {
            dynamicCartMessage.setAttribute('hidden', '');

            const legacyProducts = document.querySelector('[data-dynamic-cart-products]');
            if (legacyProducts) {
                legacyProducts.remove();
            }

            const productsWrap = document.createElement('div');
            productsWrap.dataset.dynamicCartProducts = '';

            let quantityLabel = 0;

            for (let key in data.dynamicCart) {
                const { id, name, image, quantity, value, installments, installmentValue } = data.dynamicCart[key];
                const productTemplate = document.querySelector('[template-dynamic-cart]').cloneNode(true);
                productTemplate.classList.remove('template');

                quantityLabel = quantityLabel + quantity;

                const templateImage = productTemplate.querySelector('[template-dynamic-cart-image]');
                templateImage.src = image;

                const templateName = productTemplate.querySelector('[template-dynamic-cart-name]');
                templateName.textContent = name;

                const formatedInstallmentValue = formatCurrency(value);
                const installmentsString = `${ installments }x de R$ ${ formatedInstallmentValue } `;
                const templateInstallments = productTemplate.querySelector('[template-dynamic-cart-installments]');
                templateInstallments.textContent = installmentsString;

                const formatedValue = formatCurrency(value);
                const valueString = `R$ ${ formatedValue } à vista`;
                const templateValue = productTemplate.querySelector('[template-dynamic-cart-price]');
                templateValue.textContent = valueString;

                productsWrap.appendChild(productTemplate);
            }

            const dynamicCart = document.querySelector('[data-dynamic-cart]');

            dynamicCart.appendChild(productsWrap);

            module.exports.updateMenuQuantityLabel(quantityLabel);

            return;
        }
        dynamicCartMessage.removeAttribute('hidden');
    },
    updateMenuQuantityLabel(amount) {
        const menuLabel = document.querySelector('[data-menu-label]');

        menuLabel.textContent = amount;
    }
}