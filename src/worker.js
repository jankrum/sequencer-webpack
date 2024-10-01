// worker.js
import { pipe, filter } from 'callbag-basics'
import interval from 'callbag-interval'
import { workerSink } from 'callbag-worker'

pipe(
    interval(1000),
    filter(x => x % 2),
    workerSink(self)
)