class Wallet {
   constructor(money) {
      let _money = money;
      //pobieranie aktualnej zawartości portfela
      this.getWalletValue = () => _money;

      //sprawdzanie czy można przystąpić do gry, czy ma tyle kasy
      this.checkCanPlay = (value) => {
         if (_money >= value) return true;
         return false;
      }

      //zmiana zawartości portfela
      this.changeWallet = (value, type = "+") => {
         if (typeof value === "number" && !isNaN(value)) { //!isNaN - czy jest NaN - odwrotnie
            if (type === "+") {
               return _money += value;
            } else if (type === "-") {
               return _money -= value;
            } else {
               throw new Error("nieprawidłowy typ działania");
            }
         } else {
            console.log(typeof value);
            throw new Error("nieprawidłowa liczba");
         }
      }

   }
}
const wallet = new Wallet(200);