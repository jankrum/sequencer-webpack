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
        function newChart() {
            const chartName = setlist[this.chartIndex]
            const chart = loadChart(chartName)
            const chartTitle = chart.title
            const canPrevious = this.chartIndex > 0
            const canNext = this.chartIndex < setlistLength - 1

            for (const subscriber of this.subscribers) {
                subscriber({ chart, chartTitle, canPrevious, canNext })
            }
        }

        switch (type) {
            case 'PREVIOUS':
                if (this.chartIndex > 0) {
                    this.chartIndex -= 1
                    newChart()
                }
                break
            case 'NEXT':
                if (this.chartIndex < setlistLength - 1) {
                    this.chartIndex += 1
                    newChart()
                }
                break
            case 'INIT':
                newChart()
                break
            default:
                throw new Error(`Invalid type: ${type}`)
        }
    }
}

export default Paginator