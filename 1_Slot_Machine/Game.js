class Game {
   constructor() {
      this.stats = new Statistics();
      this.wallet = new Wallet(100); // określenie ile gracz ma kasy na początku

      document.getElementById('start').addEventListener('click', this.startGame);
      this.spanWallet = document.querySelector('.panel span.wallet');
      this.boards = [...document.querySelectorAll('div.color')]; //zamiana na tablice
      this.inputBid = document.getElementById('bid');
      this.inputBid = document.getElementById('bid');
      this.spanResult = document.querySelector('.score span.result');
      this.spanGames = document.querySelector('.score span.number');
      this.spanWins = document.querySelector('.score span.win');
      this.spanLosses = document.querySelector('.score span.loss');

      this.render()
   }
   //
   render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
      // console.log('gramy');
      this.boards.forEach((board, index) => {
         board.style.backgroundColor = colors[index];
      });
      this.spanWallet.textContent = money;
      if (result) {
         result = `Wygrałeś ${wonMoney}`;
      } else if (!result && result != "") {
         result = `Przegrałeś ${bid}`;
      }
      this.spanResult.textContent = result;
      this.spanGames.textContent = stats[0];
      this.spanWins.textContent = stats[0];
      this.spanLosses.textContent = stats[0];
   }

   startGame() {

   }
}