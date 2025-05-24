import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";




export class PlayersController {
  constructor() {
    console.log('players loaded to page', AppState.players)
    this.drawPlayers()
  }

  reduceScore(playerName) {
    playersService.changeTotalScored(playerName, -1)
    console.log('Players score reduced')
    this.drawPlayers()
  }

  scorePoint(playerName) {
    playersService.changeTotalScored(playerName, +1)
    console.log('Players score increase!')
    this.drawPlayers()
  }

  // this adds a different player by their name to each of the card-templates

  addPlayer(playerName) {
    const players = AppState.players
    event?.preventDefault()
    playersService.addPlayer(playerName)
    this.drawPlayers()
  }



  // this draws the player card template to the screen but only one player repeatedly
  drawPlayers() {
    const players = AppState.players
    let playersContent = ''
    for (let i = 0; i < players.length; i++) {
      const player = players[i]
      playersContent += player.PlayerTemplateCard
    }
    const playersElm = document.getElementById('player-cards')
    playersElm.innerHTML = playersContent
  }


}