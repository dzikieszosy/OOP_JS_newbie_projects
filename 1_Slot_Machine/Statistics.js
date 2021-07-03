class Statistics {
   constructor() {
      this.gameResults = [];
   }
   addGameToStatistics(win, bid) {
      let gameResult = {
         win: win,
         bid: bid
      }
      console.log(gameResult);
      this.gameResults.push(gameResult);
   }

   showGameStatistics() {
      let games = this.gameResults.length; // liczba liczba
      let wins = this.gameResults.filter(result => result.win); // liczba wygranych
      // return [liczbaGier, liczbaWygranych, liczbaPorazek]

   }
}

const stats = new Statistics();