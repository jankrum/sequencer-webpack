import dummyScript from '../scripts/dummy.js'

export default {
    title: "Lead Scale",
    parts: {
        lead: {
            script: dummyScript,
            score: [
                {
                    position: -Infinity,
                    type: "tempo",
                    bpm: 60
                },
                {
                    position: 0,
                    type: "note",
                    pitch: 60,
                    duration: 1
                },
                {
                    position: 1,
                    type: "note",
                    pitch: 62,
                    duration: 1
                },
                {
                    position: 2,
                    type: "note",
                    pitch: 64,
                    duration: 1
                },
                {
                    position: 3,
                    type: "note",
                    pitch: 65,
                    duration: 1
                },
                {
                    position: 4,
                    type: "note",
                    pitch: 67,
                    duration: 1
                },
                {
                    position: 5,
                    type: "note",
                    pitch: 69,
                    duration: 1
                },
                {
                    position: 6,
                    type: "note",
                    pitch: 71,
                    duration: 1
                },
                {
                    position: 7,
                    type: "note",
                    pitch: 72,
                    duration: 1
                }
            ]
        }
    }
}