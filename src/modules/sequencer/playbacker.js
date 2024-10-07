import Band from './playbacker/band.js'

class Playbacker {
    #playbackState  // 'playing', 'paused', or 'stopped'
    #band  // An instance of the Band class
    #subscriptions  // Used to store subscribers

    constructor() {
        this.#playbackState = 'paused'
        this.#band = new Band()
        this.#subscriptions = {}
    }

    addEventListener(action, callback) {
        if (!this.#subscriptions[action]) {
            this.#subscriptions[action] = []
        }

        this.#subscriptions[action].push(callback)
    }

    send(type, value) {
        if (type === 'CHANGE_CHART') {
            this.#changeChart(value)
            return
        }

        switch (this.#playbackState) {
            case 'playing':
                switch (type) {
                    case 'PAUSE':
                        this.#pause()
                        break
                    case 'STOP':
                        this.#stop()
                        break
                    default:
                        throw new Error(`Cannot ${type} while playing`)
                }
                break
            case 'paused':
                switch (type) {
                    case 'PLAY':
                        this.#resume()
                        break
                    case 'STOP':
                        this.#stop()
                        break
                    default:
                        throw new Error(`Cannot ${type} while paused`)
                }
                break
            case 'stopped':
                switch (type) {
                    case 'PLAY':
                        this.#play()
                        break
                    default:
                        throw new Error(`Cannot ${type} while stopped`)
                }
                break
            default:
                throw new Error(`Invalid playback state: ${this.#playbackState}`)
        }
    }

    #changeChart(newChart) {
        this.#band.send('CHANGE_CHART', newChart)
        if (this.#playbackState !== 'stopped') {
            this.send('STOP')
        }
    }

    #play() {
        this.#playbackState = 'playing'
        this.#notifySubscribers('play')
    }

    #pause() {
        this.#playbackState = 'paused'
        this.#notifySubscribers('pause')
    }

    #resume() {
        this.#playbackState = 'playing'
        this.#notifySubscribers('resume')
    }

    #stop() {
        this.#playbackState = 'stopped'
        this.#notifySubscribers('stop')
    }

    #notifySubscribers(action) {
        if (this.#subscriptions[action]) {
            this.#subscriptions[action].forEach(callback => callback())
        } else {
            throw new Error(`Invalid action: ${action}`)
        }
    }
}

export default Playbacker