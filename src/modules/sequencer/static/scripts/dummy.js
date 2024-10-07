export default (controller, score) => {
    const eventBuffer = []

    for (const event of score) {
        switch (event.type) {
            case 'tempo':
                eventBuffer.push(event)
                break
            case 'note':
                const { position, pitch, duration } = event
                eventBuffer.push({
                    position,
                    type: 'noteOn',
                    pitch,
                })
                eventBuffer.push({
                    position: position + duration - 0.1,
                    type: 'noteOff',
                    pitch,
                })
                break
            default:
                throw new Error(`Invalid event type: ${event.type}`)
        }
    }

    return eventBuffer.toSorted((a, b) => a.position - b.position)
}