import dm from './dm.js'

// Used to create the transporter buttons
const BUTTON_SYMBOLS_AND_NAMES = [
    ['⏮', 'previous'],
    ['▶', 'play'],
    ['⏸', 'pause'],
    ['⏹', 'stop'],
    ['⏭', 'next'],
]

// Used to determine which buttons should be disabled
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
    #chartTitleHeading  // Used to display the chart title
    #buttons  // Used to attach event listeners to the buttons

    constructor() {
        this.#chartTitleHeading = null
        this.#buttons = {}
    }

    setUp() {
        // Find the transporter div
        const transporterDiv = document.querySelector('#transporter')

        // Create the chart title heading
        const chartTitleHeading = this.#chartTitleHeading = dm('h2')

        // Create the buttons
        const buttons = BUTTON_SYMBOLS_AND_NAMES.map(([symbol, name]) => {
            const button = dm('button', {}, symbol)
            this.#buttons[name] = button
            return button
        })

        // Create the button div
        const buttonDiv = dm('div', {}, ...buttons)

        // Append the chart title heading and button div to the transporter div
        transporterDiv.append(chartTitleHeading, buttonDiv)
    }

    addEventListener(name, callback) {
        // The button we will attach the event listener to
        const button = this.#buttons[name]

        // If the button does not exist, throw an error
        if (!button) {
            throw new Error(`Invalid button name: ${name}`)
        }

        // Attach the event listener to the button
        button.addEventListener('click', callback)
    }

    send(type, value) {
        switch (type) {
            case 'CHANGE_CHART':
                this.#changeChart(value)
                break
            case 'CHANGE_PLAYBACK':
                this.#changePlayback(value)
                break
            default:
                throw new Error(`Invalid type: ${type}`)
        }
    }

    #changeChart({ chartTitle, canPrevious, canNext }) {
        // Update the chart title heading and the buttons
        this.#chartTitleHeading.innerText = chartTitle
        this.#buttons.previous.disabled = !canPrevious
        this.#buttons.next.disabled = !canNext
    }

    #changePlayback(playbackState) {
        // The dictionary of button names and whether they should be disabled
        const stateDict = PLAYBACK_STATE_DICT[playbackState]

        // If the playback state is not found, throw an error
        if (!stateDict) {
            throw new Error(`Invalid playback state: ${playbackState}`)
        }

        // Update the buttons
        for (const [name, isDisabled] of Object.entries(stateDict)) {
            this.#buttons[name].disabled = isDisabled
        }
    }
}

export default Transporter