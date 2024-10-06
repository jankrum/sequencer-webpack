import setlist from '../../static/setlist.json'
const setlistLength = setlist.length

function loadChart(name) {
    return {
        title: `Title ${name}`
    }
}

class Paginator {
    constructor() {
        // The index of the current chart in the setlist
        this.chartIndex = 0

        // Used to store subscribers
        this.subscribers = []
    }

    setUp() { }

    addEventListener(action, callback) {
        switch (action) {
            case 'newChart':
                this.subscribers.push(callback)
                break
            default:
                throw new Error(`Invalid action: ${action}`)
        }
    }

    send({ type }) {
        switch (type) {
            case 'PREVIOUS':
                this.goPrevious()
                break
            case 'NEXT':
                this.goNext()
                break
            case 'INIT':
                this.newChart()
                break
            default:
                throw new Error(`Invalid type: ${type}`)
        }
    }

    goPrevious() {
        if (this.chartIndex > 0) {
            this.chartIndex -= 1
            this.newChart()
        }
    }

    goNext() {
        if (this.chartIndex < setlistLength - 1) {
            this.chartIndex += 1
            this.newChart()
        }
    }

    newChart() {
        const chartName = setlist[this.chartIndex]
        const chart = loadChart(chartName)
        const chartTitle = chart.title
        const canPrevious = this.chartIndex > 0
        const canNext = this.chartIndex < setlistLength - 1

        for (const subscriber of this.subscribers) {
            subscriber({ chart, chartTitle, canPrevious, canNext })
        }
    }
}

export default Paginator