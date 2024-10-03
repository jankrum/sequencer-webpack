import Transporter from './transporter.js'
import { createMachine, assign, createActor } from 'xstate'

class Sequencer {
    constructor() {
        this.transporter = new Transporter()
    }

    setUp() {
        const transporter = this.transporter

        transporter.setUp()

        const playbackMachine = createMachine({
            context: {
                chartTitle: '',
                canPrevious: false,
                state: Transporter.STATES.STOPPED,
                canNext: false,
            },
            on: {
                PLAY: {
                    actions: assign({
                        state: Transporter.STATES.PLAYING,
                    }),
                },
                PAUSE: {
                    actions: assign({
                        state: Transporter.STATES.PAUSED,
                    }),
                },
                STOP: {
                    actions: assign({
                        state: Transporter.STATES.STOPPED,
                    }),
                },
            },
        })

        const playbackActor = createActor(playbackMachine).start()

        playbackActor.subscribe(playbackState => {
            console.log('playbackState', playbackState)

            const { chartTitle, canPrevious, state, canNext } = playbackState.context

            transporter.sendState(chartTitle, canPrevious, state, canNext)
        })

        transporter.addEventListener('play', () => {
            playbackActor.send({ type: 'PLAY' })
        })

        transporter.addEventListener('pause', () => {
            playbackActor.send({ type: 'PAUSE' })
        })

        transporter.addEventListener('stop', () => {
            playbackActor.send({ type: 'STOP' })
        })

        playbackActor.send({ type: 'STOP' })
    }
}

export default Sequencer