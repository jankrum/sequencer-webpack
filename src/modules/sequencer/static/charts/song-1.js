import dummyScript from '../scripts/dummy.js'

export default {
    title: "Song 1",
    parts: {
        bass: {
            script: dummyScript,
            score: [
                {
                    position: -Infinity,
                    type: "tempo",
                    bpm: 120
                },
                {
                    position: 0,
                    type: "note",
                    pitch: 36,
                    duration: 1
                },
                {
                    position: 1,
                    type: "note",
                    pitch: 38,
                    duration: 1
                },
                {
                    position: 2,
                    type: "note",
                    pitch: 40,
                    duration: 1
                },
                {
                    position: 3,
                    type: "note",
                    pitch: 41,
                    duration: 1
                },
                {
                    position: 4,
                    type: "note",
                    pitch: 43,
                    duration: 1
                },
                {
                    position: 5,
                    type: "note",
                    pitch: 45,
                    duration: 1
                },
                {
                    position: 6,
                    type: "note",
                    pitch: 47,
                    duration: 1
                },
                {
                    position: 7,
                    type: "note",
                    pitch: 48,
                    duration: 1
                }
            ]
        }
    }
}