import dm from './dm.js'

import { ACTION_ENUM as PAGINATOR_ACTION_ENUM } from './sequencer/paginator.js'
import { ACTION_ENUM as PLAYBACKER_ACTION_ENUM } from './sequencer/playbacker.js'

// Used to find the transporter div
const TRANSPORTER_SELECT = '#transporter'

// Used to create the transporter buttons
const BUTTON_SYMBOLS_AND_NAMES = [
    ['⏮', 'previous'],
    ['▶', 'play'],
    ['⏸', 'pause'],
    ['⏹', 'stop'],
    ['⏭', 'next'],
]

const ACTION_ENUM = {
    CHANGE_CHART: 0,
    CHANGE_PLAYBACK: 1,
}

const STATE_ENUM = {
    PLAYING: 0,
    PAUSED: 1,
    STOPPED: 2,
}

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

// Used to set up event listeners for the buttons
const BUTTON_NAMES_AND_TARGETS = [
    ['previous', 'paginator', PAGINATOR_ACTION_ENUM.PREVIOUS],
    ['next', 'paginator', PAGINATOR_ACTION_ENUM.NEXT],
    ['play', 'playbacker', PLAYBACKER_ACTION_ENUM.PLAY],
    ['pause', 'playbacker', PLAYBACKER_ACTION_ENUM.PAUSE],
    ['stop', 'playbacker', PLAYBACKER_ACTION_ENUM.STOP],
]

class Transporter {
    #chartTitleHeading = null  // Used to display the chart title
    #buttons = {}  // Used to attach event listeners to the buttons

    constructor() {
        // Find the transporter div
        const transporterDiv = document.querySelector(TRANSPORTER_SELECT)

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

    send(type, value) {
        switch (type) {
            case ACTION_ENUM.CHANGE_CHART:
                this.#changeChart(value)
                break
            case ACTION_ENUM.CHANGE_PLAYBACK:
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

    setUp(paginator, playbacker) {
        // The targets for the actions
        const targets = { paginator, playbacker }

        // Attach event listeners to the buttons
        for (const [name, target, action] of BUTTON_NAMES_AND_TARGETS) {
            this.#buttons[name].addEventListener('mousedown', () => {
                targets[target].send(action)
            })
        }
    }
}

export { Transporter as default, ACTION_ENUM, STATE_ENUM }