module.exports = {
    formatCurrency(num) {
        const currency = (num).toLocaleString('pt-br', { minimumFractionDigits: 2 });

        return currency;
    }
}