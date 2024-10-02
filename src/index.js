// // main.js
// import { pipe, take, map, forEach } from 'callbag-basics'
// import { workerSource } from 'callbag-worker'

// pipe(
//     workerSource(new Worker(new URL('./worker.js', import.meta.url))), // or workerSource('worker.js')
//     take(5),
//     map(x => x / 2),
//     forEach(x => console.log(x))
// )
// // 0.5
// // 1.5
// // 2.5
// // 3.5
// // 4.5

import { pipe, map, forEach } from 'callbag-basics'
import fromEvent from 'callbag-from-event'
import merge from 'callbag-merge'

const transporter$ = (() => {
    return merge(
        ...[
            'play',
            'pause',
            'stop',
        ].map((name) => pipe(
            fromEvent(document.querySelector(`#${name}`), 'click'),
            map(() => name)
        ))
    )
})()

pipe(
    transporter$,
    forEach(x => console.log(x))
)