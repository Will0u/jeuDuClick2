import { getGameClass, refreshStat, setInLocalGame } from "./_function";

let buyBtnArray = document.querySelectorAll('#buyBtn');
/**
 * apply shop system to every buyBtn
 */
if (window.localStorage.getItem('Game') != null) {
    buyBtnArray.forEach(btn => {
        let Game = getGameClass();
        let UserStat = Game.UserStat;
    
        for (const Class in Game) {
            if (Game[Class].name === btn.getAttribute('name')) {
                let Product = Game[Class];
                
                if (Product.name === 'minor' && UserStat.minor > 0) {
                    UserStat.stone += Product.stoneAmount * UserStat.minor;
                    UserStat.iron += Product.ironAmount * UserStat.minor;
                }
                setInLocalGame(Game);
                refreshStat(UserStat);
            };    
        };
    });
}

