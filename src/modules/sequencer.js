import Transporter from './transporter.js'
import Paginator from './sequencer/paginator.js'
import Playbacker from './sequencer/playbacker.js'

export function makeSequencer() {
    const transporter = new Transporter()
    const paginator = new Paginator()
    const playbacker = new Playbacker()

    // Set up each object to send messages to the others
    transporter.setUp(paginator, playbacker)
    paginator.setUp(transporter, playbacker)
    playbacker.setUp(transporter)

    // Start everything
    paginator.send('INIT')
}