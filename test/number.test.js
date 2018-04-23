const { formatCurrency } = require('../helpers/number');

describe('String', () => {
    it('Format currency', () => {
        expect(formatCurrency(20))
            .toBe('20,00');
        expect(formatCurrency(1000.2))
            .toBe('1.000,20');
    });
});