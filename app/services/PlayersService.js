import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


class PlayersService {
  constructor() {

  }

  addPlayer(playerName) {
    const newPlayer = new Player(playerName
    const players = AppState.players
    players.push(newPlayer)
    console.log(players)
  }




}

export const playersService = new PlayersService()