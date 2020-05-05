import GCD from '../Utility/GCD'

describe('GCD testing', () => {
    it ('GCD two non-numbers', () => {
        expect(GCD([], {})).toBeFalsy()
    });

    it ('GCD 1 non-number and 1 number', () => {
        expect(GCD([], 0)).toBeFalsy()
    });

    it ('GCD two zeros', () => {
        expect(GCD(0, 0)).toBeFalsy()
    });

    it ('GCD 1 zero and 1 non-zero', () => {
        expect(GCD(0, 2)).toBe(2)
    });

    it ('GCD two numbers', () => {
        expect(GCD(6, 8)).toBe(2)
    });
})