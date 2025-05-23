import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  players = [
    new Player('Paul'),
    new Player('Katie'),
    new Player('Kyler'),
    new Player('Kian'),
    new Player('Kalani')
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())