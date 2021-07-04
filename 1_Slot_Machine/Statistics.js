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
      let games = this.gameResults.length; // liczba gier
      let wins = this.gameResults.filter(result => result.win).length; // liczba wygranych
      let losses = this.gameResults.filter(result => !result.win).length; // liczba porażek
      // return [liczbaGier, liczbaWygranych, liczbaPorazek]
      return [games, wins, losses];

   }
}

// const stats = new Statistics();