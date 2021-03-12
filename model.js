import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'
import image from './assets/image.jpg'

export const model = [
    new TitleBlock('Hi from JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
            'border-radius': '1rem'
        }
    }),

    new TextBlock('Hire we go again. Digital madness. Программист, стремись к чистому коду. Всегда!', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),

    new ColumnsBlock([
        'Приложение на чистом JavaScript, без фреймворков',
        'Приложение создано с применением SOLID и ООП',
        'JavaScript - наше все. И даже чуть больше'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
]