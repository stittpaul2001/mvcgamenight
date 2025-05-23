export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  PlayerTemplateCard() {
    return /*HTML*/
    `
  <div class="col-md-6 d-flex justify-content-between align-content-center">
          <div class=" card text-bg-dark border-danger">
            <div class="card-body">
              <h1 class="fs-bold">Paul</h1>
              <div class="d-flex fs-1 text-end justify-content-between">
                <span class="mdi mdi-minus-thick text-pink"></span>
                <p class="fs=bold text-end">score: 0</p>
                <span class="mdi mdi-plus-thick text-bg-primary"></span>
              </div>
            </div>
          </div>
        </div>
    `
  }




}