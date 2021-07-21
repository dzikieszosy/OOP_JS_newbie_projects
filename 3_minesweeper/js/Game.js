import {
  Cell
} from './Cell.js'
import {
  UI
} from './UI.js'
import {
  Counter
} from './Counter.js';
import {
  Timer
} from './Timer.js';
import {
  ResetButton
} from './ResetButton.js';
import {
  Modal
} from './Modal.js';

class Game extends UI {
  config = {
    easy: {
      rows: 8,
      cols: 8,
      mines: 10
    },
    medium: {
      rows: 16,
      cols: 16,
      mines: 40
    },
    expert: {
      rows: 16,
      cols: 30,
      mines: 99
    }
  }

  counter = new Counter();
  timer = new Timer();
  modal = new Modal();

  isGameFinished = false;

  numberOfRows = null;
  numberOfCols = null;
  numberOfMines = null;

  cells = [];
  cellsElements = null;
  cellsToReveal = 0;
  revealedCells = 0;

  board = null;
  buttons = {
    modal: null,
    easy: null,
    normal: null,
    expert: null,
    reset: new ResetButton(),
  };

  initializeGame() {
    this.handleElements();
    this.counter.init();
    this.timer.init();
    // this.addButtonsEventListeners();
    this.newGame();

  }
  newGame(rows = this.config.easy.rows,
    cols = this.config.easy.cols,
    mines = this.config.easy.mines,
  ) {
    this.numberOfRows = rows;
    this.numberOfCols = cols;
    this.numberOfMines = mines;



    this.setStyles();

    this.generateCells();
    this.renderBoard();
    this.cellsElements = this.getElements(this.UiSelectors.cell);

    this.addCellsEventListeners();
  }

  handleElements() {
    this.board = this.getElement(this.UiSelectors.board);
  }

  addCellsEventListeners() {
    this.cellsElements.forEach((element) => {
      element.addEventListener('click', hadleCellClick);
      element.addEventListener('contextmenu', hadleCellContextMenu)
    })
  }

  generateCells() {
    for (let row = 0; row < this.numberOfRows; row++) {
      this.cells[row] = [];
      for (let col = 0; col < this.numberOfCols; col++) {
        this.cells[row].push(new Cell(col, row));
      }
    }
  }

  renderBoard() {
    this.cells.flat().forEach(cell => {
      this.board.insertAdjacentHTML('beforeend', cell.createElement())
      cell.element = cell.getElement(cell.selector)
    })
  }

  handleCellClick = (e) => {
    const target = e.target;
    const rowIndex = parseInt(target.getAttribute('data-y'), 10);
    const colIndex = parseInt(target.getAttribute('data-x'), 10);

    const cell = this.cells[rowIndex][colIndex].revealCell();
    this.clickCell(cell);
  }

  hadleCellContextMenu = () => {

  }

  setStyles() {
    document.documentElement.style.setProperty('--cells-in-row', this.numberOfCols)
  }

}

window.onload = function () {
  const game = new Game();

  game.initializeGame();
}