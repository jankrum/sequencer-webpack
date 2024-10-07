import Transporter from './transporter.js'
import Paginator from './sequencer/paginator.js'
import Playbacker from './sequencer/playbacker.js'

class Sequencer {
    #transporter
    #paginator
    #playbacker

    constructor() {
        this.#transporter = new Transporter()
        this.#paginator = new Paginator()
        this.#playbacker = new Playbacker()
    }

    setUp() {
        const transporter = this.#transporter
        const paginator = this.#paginator
        const playbacker = this.#playbacker

        transporter.setUp()

        transporter.addEventListener('previous', () => {
            paginator.send('PREVIOUS')
        })

        transporter.addEventListener('next', () => {
            paginator.send('NEXT')
        })

        transporter.addEventListener('play', () => {
            playbacker.send('PLAY')
        })

        transporter.addEventListener('pause', () => {
            playbacker.send('PAUSE')
        })

        transporter.addEventListener('stop', () => {
            playbacker.send('STOP')
        })

        paginator.addEventListener('newChart', event => {
            const { chart, chartTitle, canPrevious, canNext } = event

            transporter.send('CHANGE_CHART', { chartTitle, canPrevious, canNext })

            playbacker.send('CHANGE_CHART', chart)
        })

        playbacker.addEventListener('play', () => {
            transporter.send('CHANGE_PLAYBACK', 'playing')
        })

        playbacker.addEventListener('pause', () => {
            transporter.send('CHANGE_PLAYBACK', 'paused')
        })

        playbacker.addEventListener('resume', () => {
            transporter.send('CHANGE_PLAYBACK', 'playing')
        })

        playbacker.addEventListener('stop', () => {
            transporter.send('CHANGE_PLAYBACK', 'stopped')
        })

        // Start everything
        paginator.send('INIT')
    }
}

export default Sequencer