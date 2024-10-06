import dm from './dm.js'

const BUTTON_SYMBOLS_AND_NAMES = [
    ['⏮', 'previous'],
    ['▶', 'play'],
    ['⏸', 'pause'],
    ['⏹', 'stop'],
    ['⏭', 'next'],
]

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

        for (const [symbol, name] of BUTTON_SYMBOLS_AND_NAMES) {
            const button = dm('button', {}, symbol)
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
                this.changeChart(value)
                break
            case 'CHANGE_PLAYBACK':
                this.changePlayback(value)
                break
            default:
                throw new Error(`Invalid type: ${type}`)
        }
    }

    changeChart({ chartTitle, canPrevious, canNext }) {
        this.chartTitleHeading.innerText = chartTitle
        this.buttons.previous.disabled = !canPrevious
        this.buttons.next.disabled = !canNext
    }

    changePlayback(playbackState) {
        const stateDict = PLAYBACK_STATE_DICT[playbackState]

        if (!stateDict) {
            throw new Error(`Invalid playback state: ${playbackState}`)
        }

        for (const [name, isDisabled] of Object.entries(stateDict)) {
            this.buttons[name].disabled = isDisabled
        }
    }
}

export default Transporter