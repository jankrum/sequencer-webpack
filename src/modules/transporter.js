import dm from './dm.js'

class Transporter {
    static STATES = {
        PLAYING: 0,
        PAUSED: 1,
        STOPPED: 2,
    }

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
        const buttonNames = ['previous', 'play', 'pause', 'stop', 'next']

        for (const name of buttonNames) {
            const button = dm('button', {}, name)
            this.buttons[name] = button
            buttonDiv.appendChild(button)
        }
    }

    addEventListener(buttonName, callback) {
        const button = this.buttons[buttonName]
        button.addEventListener('click', callback)
    }

    sendState(chartTitle, canPrevious, state, canNext) {
        this.chartTitleHeading.innerText = chartTitle

        this.buttons.previous.disabled = !canPrevious

        switch (state) {
            case Transporter.STATES.PLAYING:
                this.buttons.play.disabled = true
                this.buttons.pause.disabled = false
                this.buttons.stop.disabled = false
                break
            case Transporter.STATES.PAUSED:
                this.buttons.play.disabled = false
                this.buttons.pause.disabled = true
                this.buttons.stop.disabled = false
                break
            case Transporter.STATES.STOPPED:
                this.buttons.play.disabled = false
                this.buttons.pause.disabled = true
                this.buttons.stop.disabled = true
                break
        }

        this.buttons.next.disabled = !canNext
    }
}

export default Transporter