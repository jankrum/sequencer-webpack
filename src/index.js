// main.js
const { pipe, take, map, forEach } = require('callbag-basics')
const { workerSource } = require('callbag-worker')

pipe(
    workerSource(new Worker(new URL('./worker.js', import.meta.url))), // or workerSource('worker.js')
    take(5),
    map(x => x / 2),
    forEach(x => console.log(x))
)
// 0.5
// 1.5
// 2.5
// 3.5
// 4.5