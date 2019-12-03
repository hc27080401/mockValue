module.exports = function ({ image }, { tests, test, assert }) {
    tests('image', () => {
        test('image.img()', () => image.img(), value => {
            assert.isString(value)
            assert.isBe(value, 'https://dummyimage.com/100x100')
        })

        test('image.img(size)', image.img('666x666'), value => {
            assert.isString(value)
            assert.isBe(value, 'https://dummyimage.com/666x666')
        })

        test('image.img(size, background, color, text, type)', () => {
            const value1 = image.img('200x200', '#666', '#fff', '中国', 'jpg')
            assert.isString(value1)
            assert.isBe(value1, 'https://dummyimage.com/200x200/666/fff.jpg&text=中国')

            const value2 = image.img('300x300', '#666', null, '中国')
            assert.isString(value2)
            assert.isBe(value2, 'https://dummyimage.com/300x300/666&text=中国')
        })

        test('image.img(option)', () => {
            const value1 = image.img({ size: '66x66' })
            assert.isString(value1)
            assert.isBe(value1, 'https://dummyimage.com/66x66')

            const value2 = image.img({ text: '中国' })
            assert.isString(value2)
            assert.isBe(value2, 'https://dummyimage.com/100x100&text=中国')

            const value3 = image.img({ background: '#666' })
            assert.isString(value3)
            assert.isBe(value3, 'https://dummyimage.com/100x100/666')

            const value4 = image.img({ color: '#666' })
            assert.isString(value4)
            assert.isBe(value4, 'https://dummyimage.com/100x100/fff/666')

            const value5 = image.img({ type: 'jpg' })
            assert.isString(value5)
            assert.isBe(value5, 'https://dummyimage.com/100x100.jpg')
        })
    })
}
