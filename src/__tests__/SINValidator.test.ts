import SINValidator from '../utils/Validator';

describe('SINValidator', () => {
    it('should validate a correct SIN', () => {
        const validator = new SINValidator('046454286');  // valid SIN
        expect(validator.isValidSIN()).toBe(true);
    });

    it('should invalidate an incorrect SIN', () => {
        const validator = new SINValidator('046454296');  // invalid SIN
        expect(validator.isValidSIN()).toBe(false);
    });

    it('should invalidate a SIN with less than 9 digits', () => {
        const validator = new SINValidator('12345678');  // invalid, only 8 digits
        expect(validator.isValidSIN()).toBe(false);
    });

    it('should invalidate a SIN with more than 9 digits', () => {
        const validator = new SINValidator('1234567890');  // invalid, 10 digits
        expect(validator.isValidSIN()).toBe(false);
    });

    it('should invalidate a SIN with non-numeric characters', () => {
        const validator = new SINValidator('12345678A');  // invalid, contains a letter
        expect(validator.isValidSIN()).toBe(false);
    });
});
