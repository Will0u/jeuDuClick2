import { getGameClass, refresh } from "./_function";

let buyBtnArray = document.querySelectorAll('#buyBtn');

/**
 * apply shop system to every buyBtn
 */
buyBtnArray.forEach(btn => {
    btn.addEventListener('click', () => {
        // let taxSpan = document.querySelector('#stat[name="tax"]');
        let Game = getGameClass();
        let UserStat = Game.UserStat;
        let Minor = Game.Minor;
        let Blacksmith = Game.Blacksmith;

        for (const Class in Game) {
            if (Game[Class].name === btn.getAttribute('name')){
                let Product = Game[Class];
                if (UserStat.money >= Product.price) {
                    UserStat.pay(Product.price);
                    UserStat[btn.getAttribute('name')] = ++ UserStat[btn.getAttribute('name')];

                    let tax = 
                    (UserStat.minor * Minor.salary) +
                    (UserStat.blacksmith * Blacksmith.salary);
                    UserStat.tax = UserStat.tax + 
                    tax;
                    
                    refresh(Game,UserStat);
                } else console.log('Pas de thunes');
            }; 
        };

    });
});