import { getGameClass, refreshStat, setInLocalGame } from "./_function";

let buyBtnArray = document.querySelectorAll('#buyBtn');

/**
 * apply shop system to every buyBtn
 */
buyBtnArray.forEach(btn => {
    btn.addEventListener('click', () => {
        let Game = getGameClass();
        let UserStat = Game.UserStat;

        for (const Class in Game) {
            if (Game[Class].name === btn.getAttribute('name')){
                let Product = Game[Class];
                if (UserStat.money >= Product.price) {
                    UserStat.pay(Product.price);
                    UserStat[btn.getAttribute('name')] = ++ UserStat[btn.getAttribute('name')];
                    setInLocalGame(Game);
                    refreshStat(UserStat);
                } else console.log('Pas de thunes');
            }; 
        };

    });
});