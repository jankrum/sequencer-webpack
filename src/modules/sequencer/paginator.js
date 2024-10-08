import SETLIST from './static/setlist'
const SETLIST_LENGTH = SETLIST.length

import { ACTION_ENUM as TRANSPORTER_ACTION_ENUM } from '../transporter.js'
import { ACTION_ENUM as PLAYBACKER_ACTION_ENUM } from './playbacker.js'

const ACTION_ENUM = {
    PREVIOUS: 0,
    NEXT: 1,
    INIT: 2,
}

class Paginator {
    #chartIndex = 0  // The index of the current chart in the setlist
    #subscription = () => { }  // Used as callback for subscribers

    send(type) {
        switch (type) {
            case ACTION_ENUM.PREVIOUS:
                this.#goPrevious()
                break
            case ACTION_ENUM.NEXT:
                this.#goNext()
                break
            case ACTION_ENUM.INIT:
                this.#newChart()
                break
            default:
                throw new Error(`Invalid type: ${type}`)
        }
    }

    #goPrevious() {
        if (this.#chartIndex > 0) {
            // Decrement if we can and load the new chart
            this.#chartIndex -= 1
            this.#newChart()
        }
    }

    #goNext() {
        if (this.#chartIndex < SETLIST_LENGTH - 1) {
            // Increment if we can and load the new chart
            this.#chartIndex += 1
            this.#newChart()
        }
    }

    #newChart() {
        // Load the new chart
        const chart = SETLIST[this.#chartIndex]

        // Transporter needs the chart title and the pagination information
        const chartTitle = chart.title
        const canPrevious = this.#chartIndex > 0
        const canNext = this.#chartIndex < SETLIST_LENGTH - 1

        // Send to subscribers
        this.#subscription({ chart, chartTitle, canPrevious, canNext })
    }

    setUp(transporter, playbacker) {
        // Paginator -> Transporter & Playbacker
        this.#subscription = event => {
            const { chart, chartTitle, canPrevious, canNext } = event

            transporter.send(TRANSPORTER_ACTION_ENUM.CHANGE_CHART, { chartTitle, canPrevious, canNext })

            playbacker.send(PLAYBACKER_ACTION_ENUM.CHANGE_CHART, chart)
        }
    }
}

export { Paginator as default, ACTION_ENUM }