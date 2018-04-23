const { formatCurrency } = require('../helpers/number');

describe('String', () => {
    it('Format currency', () => {
        expect(formatCurrency(20))
            .toBe('20,00');
    });
});