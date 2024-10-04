class PlaybackMachine {
    constructor() {
        this.playbackState = 'paused'
        this.chart = null

        this.subscriptions = {}
    }

    setUp() { }

    addEventListener(action, callback) {
        if (!this.subscriptions[action]) {
            this.subscriptions[action] = []
        }

        this.subscriptions[action].push(callback)
    }

    send({ type, value }) {
        if (type === 'CHANGE_CHART') {
            this.chart = value
            console.log('playback state when changing chart', this.playbackState)
            if (this.playbackState !== 'stopped') {
                this.send({ type: 'STOP' })
            }
            return
        }

        switch (this.playbackState) {
            case 'playing':
                switch (type) {
                    case 'PAUSE':
                        this.playbackState = 'paused'
                        this.subscriptions['pause'].forEach(callback => callback())
                        break
                    case 'STOP':
                        this.playbackState = 'stopped'
                        this.subscriptions['stop'].forEach(callback => callback())
                        break
                    default:
                        throw new Error(`Cannot ${type} while playing`)
                }
            case 'paused':
                switch (type) {
                    case 'PLAY':
                        this.playbackState = 'playing'
                        this.subscriptions['resume'].forEach(callback => callback())
                        break
                    case 'STOP':
                        this.playbackState = 'stopped'
                        this.subscriptions['stop'].forEach(callback => callback())
                        break
                    default:
                        throw new Error(`Cannot ${type} while paused`)
                }
            case 'stopped':
                switch (type) {
                    case 'PLAY':
                        this.playbackState = 'playing'
                        this.subscriptions['play'].forEach(callback => callback())
                        break
                    default:
                        throw new Error(`Cannot ${type} while stopped`)
                }
            default:
                throw new Error(`Invalid playback state: ${this.playbackState}`)
        }
    }
}

export default PlaybackMachine