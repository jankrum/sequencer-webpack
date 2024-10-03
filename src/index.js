import Sequencer from './modules/sequencer.js'
const sequencer = new Sequencer()
await sequencer.setUp()
console.log('sequencer', sequencer)