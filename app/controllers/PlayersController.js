import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { playersService } from "../services/PlayersService.js";



export class PlayersController {
  constructor() {
    console.log('players loaded to page', AppState.players)
    this.drawPlayers()
  }









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