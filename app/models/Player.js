export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  // Player.js
  get PlayerTemplateCard() {
    return /*html*/`

    <div class="card border-danger text-bg-dark mb-2 mt-2 col-md-5">
        <div class="card-body text-bd-danger border-danger">
            <h1 class="fw-bold">${this.name}
            <div class="text-end fs-1 ">Score:
              <span class="fs-1 fs-bold text-bg-warning" title="${this.name}"> ${this.score} </span>
            </div>
            <div class="text-end fs-1">
              <span onclick="app.PlayersController.reduceScore('${this.name}')" class="btn btn-danger fs-bold mdi mdi-minus-thick  fs-1 "></span> 
              <span onclick="app.PlayersController.scorePoint('${this.name}')" class="btn btn-primary mdi mdi-plus-thick text-bg-primary fs-bold fs-1" title="Increase players total score"></span>
            </div>
          </div>
        </div>
      </h1>
    `
  }


}