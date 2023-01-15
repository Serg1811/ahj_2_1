import Board from './Board';

export default class GamePlay {
  constructor(boardSize = 4) {
    this.board = new Board();
    this.boardSize = boardSize;
    this.index = null;
  }

  init() {
    document.body.appendChild(this.board.createBoard(this.boardSize));
    this.cells = [...document.querySelectorAll('.cell')];
    // eslint-disable-next-line prefer-destructuring
    this.img = document.images[0];
    this.start();
  }

  getIndex() {
    let index = null;
    do {
      index = Math.floor(Math.random() * (this.boardSize ** 2));
    } while (index === this.index);
    this.index = index;
    return index;
  }

  start() {
    setInterval(() => {
      if (this.index || this.index === 0) {
        this.cells[this.index].classList.remove('active');
        this.cells[this.index].innerHTML = '';
      }
      this.getIndex();
      this.cells[this.index].classList.add('active');
      this.cells[this.index].appendChild(this.img);
    }, 1000);
  }
}
