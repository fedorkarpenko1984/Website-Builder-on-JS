import {block} from '../utils'

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('beforeend', this.template)
        this.$el.addEventListener('submit', this.add)
    }

    get template() {
        return [
            block('text'),
            block('title')
        ]
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
    }
}

