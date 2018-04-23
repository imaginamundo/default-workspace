const { stringify, formatInstallments, formatSpotPrice } = require('../helpers/string');

describe('String', () => {
    it('Convert object to string', () => {
        expect(typeof stringify({ hello: 'World!' }))
            .toBe('string');
    });

    it('Format installments', () => {
        expect(formatInstallments(10, 300))
            .toBe('10x R$ 300,00');
    });

    it('Format spot price', () => {
        expect(formatSpotPrice(20))
            .toBe('ou R$ 20,00 à vista')
    });
});