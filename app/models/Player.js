export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  // Player.js
  get PlayerTemplateCard() {
    return /*html*/`

    <div class="card border-danger text-bg-dark mb-2 mt-2">
        <div class="card-body text-bd-dark border-danger">
            <h1>${this.name}</h1>
              <div class="text-end">
                <span onclick="app.PlayersController.reduceScore('${this.name}')" roll="button" class="fs=bold mdi mdi-minus-thick text-pink fs-1 "> 
                  <span class="fs-1 fs-bold text-bg-warning" title="${this.name} total-score"> ${this.score} </span>
                  <span onclick="app.PlayersController.scorePoint('${this.name}')" class="mdi mdi-plus-thick text-bg-primary fs-bold fs-1" role="button" title="Increase players total score"></span>
                </div>
              
        </div>
    </div>

    `
  }


}