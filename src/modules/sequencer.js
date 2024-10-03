import Transporter from './transporter.js'
import Paginator from './sequencer/paginator.js'
import Playbacker from './sequencer/playbacker.js'

class Sequencer {
    constructor() {
        this.transporter = new Transporter()
        this.paginator = new Paginator()
        this.playbacker = new Playbacker()
    }

    async setUp() {
        const transporter = this.transporter
        const paginator = this.paginator
        const playbacker = this.playbacker

        transporter.setUp()
        paginator.setUp()
        playbacker.setUp()

        transporter.addEventListener('previous', () => {
            paginator.send({ type: 'PREVIOUS' })
        })

        transporter.addEventListener('next', () => {
            paginator.send({ type: 'NEXT' })
        })

        transporter.addEventListener('play', () => {
            playbacker.send({ type: 'PLAY' })
        })

        transporter.addEventListener('pause', () => {
            playbacker.send({ type: 'PAUSE' })
        })

        transporter.addEventListener('stop', () => {
            playbacker.send({ type: 'STOP' })
        })

        paginator.addEventListener('newChart', event => {
            const { chart, chartTitle, canPrevious, canNext } = event

            transporter.send({
                type: 'CHANGE_CHART',
                value: { chartTitle, canPrevious, canNext }
            })

            playbacker.send({
                type: 'CHANGE_CHART',
                value: chart
            })
        })

        playbacker.addEventListener('play', () => {
            transporter.send({ type: 'CHANGE_PLAYBACK', value: 'playing' })
        })

        playbacker.addEventListener('pause', () => {
            transporter.send({ type: 'CHANGE_PLAYBACK', value: 'paused' })
        })

        playbacker.addEventListener('resume', () => {
            transporter.send({ type: 'CHANGE_PLAYBACK', value: 'playing' })
        })

        playbacker.addEventListener('stop', () => {
            transporter.send({ type: 'CHANGE_PLAYBACK', value: 'stopped' })
        })

        // Start everything
        paginator.send({ type: 'INIT' })
    }
}

export default Sequencer