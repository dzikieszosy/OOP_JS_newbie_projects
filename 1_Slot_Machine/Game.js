class Game {
   constructor(start) {
      this.stats = new Statistics();
      this.wallet = new Wallet(start); // określenie ile gracz ma kasy na początku

      document.getElementById('start').addEventListener('click', this.startGame.bind(this)); //wiązanie metody
      this.spanWallet = document.querySelector('.panel span.wallet');
      this.boards = [...document.querySelectorAll('div.color')]; //zamiana na tablice
      this.inputBid = document.getElementById('bid');
      this.inputBid = document.getElementById('bid');
      this.spanResult = document.querySelector('.score span.result');
      this.spanGames = document.querySelector('.score span.number');
      this.spanWins = document.querySelector('.score span.win');
      this.spanLosses = document.querySelector('.score span.loss');

      this.render();
   }
   //
   render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
      // console.log('gramy');
      this.boards.forEach((board, i) => {
         board.style.backgroundColor = colors[i]
      })

      this.spanWallet.textContent = money;
      if (result) {
         result = `Wygrałeś ${wonMoney}$. `;
      } else if (!result && result !== "") {
         result = `Przegrałeś ${bid}$. `
      }
      this.spanResult.textContent = result;
      this.spanGames.textContent = stats[0];
      this.spanWins.textContent = stats[1];
      this.spanLosses.textContent = stats[2];

      this.inputBid.value = "";
   }

   startGame() {
      if (this.inputBid.value < 1) return alert("Kwota, którą chcesz grać jest za mała!");
      const bid = Math.floor(this.inputBid.value); // nie dość że zaokrągli to zamieni string na number
      if (!this.wallet.checkCanPlay(bid)) {
         return alert('Masz za mało środków, lub podana została nieprawidłowa wartość!');
      }
      this.wallet.changeWallet(bid, '-');

      this.draw = new Draw(); //obiekr losowania

      const colors = this.draw.getDrawResult(); //pobranie wyniku losowania
      const win = Result.checkWinner(colors);
      // console.log(win);
      const wonMoney = Result.moneyWinInGame(win, bid);
      // console.log(wonMoney);
      this.wallet.changeWallet(wonMoney);
      this.stats.addGameToStatistics(win, bid);

      this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);
   }
}