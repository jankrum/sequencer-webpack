import SETLIST from '../../static/setlist.json'
const SETLIST_LENGTH = SETLIST.length

function loadChart(name) {
    return {
        title: `Title ${name}`
    }
}

class Paginator {
    #chartIndex  // The index of the current chart in the setlist
    #subscriptions  // Used to store subscriptions

    constructor() {
        this.#chartIndex = 0
        this.#subscriptions = []
    }

    addEventListener(action, callback) {
        switch (action) {
            case 'newChart':
                // The only action we have is newChart
                this.#subscriptions.push(callback)
                break
            default:
                throw new Error(`Invalid action: ${action}`)
        }
    }

    send({ type }) {
        switch (type) {
            case 'PREVIOUS':
                this.#goPrevious()
                break
            case 'NEXT':
                this.#goNext()
                break
            case 'INIT':
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
        const chartName = SETLIST[this.#chartIndex]
        const chart = loadChart(chartName)

        // Transporter needs the chart title and the pagination information
        const chartTitle = chart.title
        const canPrevious = this.#chartIndex > 0
        const canNext = this.#chartIndex < SETLIST_LENGTH - 1

        // Notify all subscribers
        for (const subscriber of this.#subscriptions) {
            subscriber({ chart, chartTitle, canPrevious, canNext })
        }
    }
}

export default Paginator