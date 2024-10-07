class Band {
    #parts = {}

    constructor() { }

    setUp(playbacker) { }

    send(type, value) {
        switch (type) {
            case 'CHANGE_CHART':
                const newChart = value
                this.changeChart(newChart)
                break
            default:
                break
        }
    }

    changeChart() { }

    play() { }

    pause() { }

    resume() { }

    stop() { }
}

export default Band