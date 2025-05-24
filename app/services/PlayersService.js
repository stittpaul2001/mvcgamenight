import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


class PlayersService {
  constructor() {

  }

  changeTotalScored(playerName, total) {
    const players = AppState.players
    const playerFound = players.find(h1 => h1.name == playerName)
    playerFound.score += total
    if (playerFound.score >= 0) playerFound.score = 0

  }

  addPlayer(playerName) {
    const newPlayer = new Player(playerName)
    const players = AppState.players
    players.push(newPlayer)
    console.log(players)
  }


}

export const playersService = new PlayersService()