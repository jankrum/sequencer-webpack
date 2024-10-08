import Band from './playbacker/band.js'

import { ACTION_ENUM as TRANSPORTER_ACTION_ENUM } from '../transporter.js'

const ACTION_ENUM = {
    CHANGE_CHART: 0,
    PLAY: 1,
    PAUSE: 2,
    STOP: 3,
}

const PLAYBACK_STATE_ENUM = {
    PLAYING: 0,
    PAUSED: 1,
    STOPPED: 2,
}

const SUBSCRIPTION_ENUM = {
    PLAY: 0,
    PAUSE: 1,
    RESUME: 2,
    STOP: 3,
}

class Playbacker {
    #playbackState = PLAYBACK_STATE_ENUM.PAUSED
    #band = new Band()  // An instance of the Band class
    #subscriptions = {}  // Used to store subscribers

    send(type, value) {
        if (type === ACTION_ENUM.CHANGE_CHART) {
            this.#changeChart(value)
            return
        }

        switch (this.#playbackState) {
            case PLAYBACK_STATE_ENUM.PLAYING:
                switch (type) {
                    case ACTION_ENUM.PAUSE:
                        this.#pause()
                        break
                    case ACTION_ENUM.STOP:
                        this.#stop()
                        break
                    default:
                        throw new Error(`Cannot ${type} while playing`)
                }
                break
            case PLAYBACK_STATE_ENUM.PAUSED:
                switch (type) {
                    case ACTION_ENUM.PLAY:
                        this.#resume()
                        break
                    case ACTION_ENUM.STOP:
                        this.#stop()
                        break
                    default:
                        throw new Error(`Cannot ${type} while paused`)
                }
                break
            case PLAYBACK_STATE_ENUM.STOPPED:
                switch (type) {
                    case ACTION_ENUM.PLAY:
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
        if (this.#playbackState !== PLAYBACK_STATE_ENUM.STOPPED) {
            this.send(ACTION_ENUM.STOP)
        }
    }

    #play() {
        this.#playbackState = PLAYBACK_STATE_ENUM.PLAYING
        this.#notifySubscribers(SUBSCRIPTION_ENUM.PLAY)
    }

    #pause() {
        this.#playbackState = PLAYBACK_STATE_ENUM.PAUSED
        this.#notifySubscribers(SUBSCRIPTION_ENUM.PAUSE)
    }

    #resume() {
        this.#playbackState = PLAYBACK_STATE_ENUM.PLAYING
        this.#notifySubscribers(SUBSCRIPTION_ENUM.RESUME)
    }

    #stop() {
        this.#playbackState = PLAYBACK_STATE_ENUM.STOPPED
        this.#notifySubscribers(SUBSCRIPTION_ENUM.STOP)
    }

    #notifySubscribers(action) {
        if (this.#subscriptions[action]) {
            this.#subscriptions[action].forEach(callback => callback())
        } else {
            throw new Error(`Invalid action: ${action}`)
        }
    }

    #addEventListener(action, callback) {
        if (!this.#subscriptions[action]) {
            this.#subscriptions[action] = []
        }

        this.#subscriptions[action].push(callback)
    }

    setUp(transporter) {
        // Playbacker -> Transporter
        this.#addEventListener(SUBSCRIPTION_ENUM.PLAY, () => {
            transporter.send(TRANSPORTER_ACTION_ENUM.CHANGE_PLAYBACK, 'playing')
        })

        this.#addEventListener(SUBSCRIPTION_ENUM.PAUSE, () => {
            transporter.send(TRANSPORTER_ACTION_ENUM.CHANGE_PLAYBACK, 'paused')
        })

        this.#addEventListener(SUBSCRIPTION_ENUM.RESUME, () => {
            transporter.send(TRANSPORTER_ACTION_ENUM.CHANGE_PLAYBACK, 'playing')
        })

        this.#addEventListener(SUBSCRIPTION_ENUM.STOP, () => {
            transporter.send(TRANSPORTER_ACTION_ENUM.CHANGE_PLAYBACK, 'stopped')
        })
    }
}

export { Playbacker as default }