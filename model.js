import image from './assets/image.jpg'

export const model = [
    {type: 'title', value: 'Hi from javaScript', options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
        }},

    {type: 'image', value: image, options: {
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
        }},

    {type: 'text', value: 'Hire we go again', options: {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
        }
    },
    {type: 'columns', value: [
            'Приложение на чистом JavaScript, без фреймворков',
            'Принципы SOLID и ООП',
            'JavaScript - наше все'
        ],options: {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
        }
    }
]