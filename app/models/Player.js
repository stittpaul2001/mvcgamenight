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
                <button class="fs=bold text-end mdi mdi-minus-thick text-pink fs-1 "> ${this.score} 
                <span class="mdi mdi-plus-thick text-bg-primary"></span>
        </div>
    </div>

    `
  }



}