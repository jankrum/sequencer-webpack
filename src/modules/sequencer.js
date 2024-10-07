import Transporter from './transporter.js'
import Paginator from './sequencer/paginator.js'
import Playbacker from './sequencer/playbacker.js'

class Sequencer {
    #transporter = new Transporter()
    #paginator = new Paginator()
    #playbacker = new Playbacker()

    constructor() {
        const transporter = this.#transporter
        const paginator = this.#paginator
        const playbacker = this.#playbacker

        // Transporter -> Paginator
        transporter.addEventListener('previous', () => {
            paginator.send('PREVIOUS')
        })

        transporter.addEventListener('next', () => {
            paginator.send('NEXT')
        })

        // Transporter -> Playbacker
        transporter.addEventListener('play', () => {
            playbacker.send('PLAY')
        })

        transporter.addEventListener('pause', () => {
            playbacker.send('PAUSE')
        })

        transporter.addEventListener('stop', () => {
            playbacker.send('STOP')
        })

        // Paginator -> Transporter & Playbacker
        paginator.addEventListener('newChart', event => {
            const { chart, chartTitle, canPrevious, canNext } = event

            transporter.send('CHANGE_CHART', { chartTitle, canPrevious, canNext })

            playbacker.send('CHANGE_CHART', chart)
        })

        // Playbacker -> Transporter
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