import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


class PlayersService {
  constructor() {

  }

  increaseScore(playerName) {
    console.log('service', playerName);
    const playerScoreIncrease = AppState.players.find(player => player.name == playerName)
    playerScoreIncrease.score++
    console.log(playerScoreIncrease)
  }

  reduceScore(playerName) {
    console.log('service', playerName)
    const playerScoreReduce = AppState.players.find(player => player.name == playerName)
    playerScoreReduce.score--
    if (playerScoreReduce.score < 0) playerScoreReduce.score = 0
    console.log(playerScoreReduce)
  }

  addPlayer(playerName) {
    const newPlayer = new Player(playerName)
    const players = AppState.players
    players.push(newPlayer)
    console.log(players)
  }


}

export const playersService = new PlayersService()