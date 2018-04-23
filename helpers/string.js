const { formatCurrency } = require('./number.js');

module.exports = {
    stringify(object) {
        return JSON.stringify(object);
    },
    formatInstallments(times, price) {
        const installments = `${ times }x R$ ${ formatCurrency(price) }`;
        
        return installments;
    },
    formatSpotPrice(price) {
        const spotPrice = `ou R$ ${ formatCurrency(price) } à vista`;

        return spotPrice;
    }
}