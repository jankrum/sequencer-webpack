import dm from './dm.js'

const BUTTON_NAMES = ['previous', 'play', 'pause', 'stop', 'next']

const PLAYBACK_STATE_DICT = {
    playing: {
        play: true,
        pause: false,
        stop: false,
    },
    paused: {
        play: false,
        pause: true,
        stop: false,
    },
    stopped: {
        play: false,
        pause: true,
        stop: true,
    },
}

class Transporter {
    constructor() {
        this.chartTitleHeading = null
        this.buttons = {}
    }

    setUp() {
        const transporterDiv = document.querySelector('#transporter')

        const chartTitleHeading = this.chartTitleHeading = dm('h2')
        transporterDiv.appendChild(chartTitleHeading)

        const buttonDiv = dm('div')
        transporterDiv.appendChild(buttonDiv)

        for (const name of BUTTON_NAMES) {
            const button = dm('button', {}, name)
            this.buttons[name] = button
            buttonDiv.appendChild(button)
        }
    }

    addEventListener(name, callback) {
        const button = this.buttons[name]

        if (!button) {
            throw new Error(`Invalid button name: ${name}`)
        }

        button.addEventListener('click', callback)
    }

    send({ type, value }) {
        switch (type) {
            case 'CHANGE_CHART':
                this.chartTitleHeading.innerText = value.chartTitle
                this.buttons.previous.disabled = !value.canPrevious
                this.buttons.next.disabled = !value.canNext
                break
            case 'CHANGE_PLAYBACK':
                const stateDict = PLAYBACK_STATE_DICT[value]

                if (!stateDict) {
                    throw new Error(`Invalid playback state: ${value}`)
                }

                for (const [name, isDisabled] of Object.entries(stateDict)) {
                    this.buttons[name].disabled = isDisabled
                }
                break
            default:
                throw new Error(`Invalid type: ${type}`)
        }
    }
}

export default Transporter