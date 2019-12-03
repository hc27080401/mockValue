
module.exports = {
    img,
}

function img (size, background, color, text, type) {
    // img('100x200')
    // img({ size, background, color, text, type })

    if (typeof size === 'object') {
        const option = size
        size = option.size
        background = option.background
        color = option.color
        text = option.text
        type = option.type
    }

    size = size || '100x100'
    background = background ? `/${background.replace(/^#/, '')}` : ''
    color = color ? `/${color.replace(/^#/, '')}` : ''
    text = text ? `&text=${text}` : ''
    type = type ? `.${type}` : ''

    if (color && background === '') {
        background = '/fff'
    }

    // https://dummyimage.com/600x400/cc00cc/470047.png&text=hello

    return [
        'https://dummyimage.com/',
        size,
        background,
        color,
        type,
        text,
    ].join('')
}
