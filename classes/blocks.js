import {col, css, row} from "../utils";

export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод не реализован')
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}


export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {imageStyles, styles} = this.options
        return row(`<img src="${this.value}" style="${css(imageStyles)}" alt="">`, css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        const html = this.value.map(col)
        return row(html.join(''), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}

export class DivBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles || 'margin-left: 0px;width: 300px; height: 100px; border: 2px solid grey'
        return row(col(`<div>${this.value}</div>`), css(styles))
    }
}