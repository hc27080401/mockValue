
module.exports = {
    isTrue (value) {
        expect(value).toBe(true)
    },
    isFalse (value) {
        expect(value).toBe(false)
    },
    isTruly (value) {
        expect(Boolean(value)).toBe(true)
    },
    isFalsy (value) {
        expect(Boolean(value)).toBe(false)
    },
    isBoolean (value) {
        expect(typeof value).toBe('boolean')
    },
    isFunction (value) {
        expect(typeof value).toBe('function')
    },
    isArray (value) {
        expect(Array.isArray(value)).toBe(true)
    },
    isNull (value) {
        expect(value).toBe(null)
    },
    isUndefined (value) {
        expect(value).toBe(undefined)
    },
    isNumber (value) {
        expect(typeof value === 'number' && !isNaN(value)).toBe(true)
    },
    isString (value) {
        expect(typeof value).toBe('string')
    },
    isEqual (value1, value2) {
        expect(value1).toEqual(value2)
    },
    isBe (value1, value2) {
        expect(value1).toBe(value2)
    },
    isLength (value, length) {
        expect(typeof value === 'string' || typeof value === 'number').toBe(true)
        expect(String(value).length === length).toBe(true)
    },
    isMatch (value, regexp) {
        expect(typeof value === 'string' || typeof value === 'number').toBe(true)
        expect(regexp.test(String(value))).toBe(true)
    },
}
