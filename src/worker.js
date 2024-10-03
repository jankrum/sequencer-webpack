// worker.js
import pipe from 'callbag-pipe'
import pausableInterval from 'callbag-pausable-interval'
import { workerSink } from 'callbag-worker'

pipe(
    pausableInterval(1000),
    workerSink(self)
)