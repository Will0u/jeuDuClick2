import './../style/main.scss';
import { getGameClass, refreshStat, setInLocalGame } from './_function.js';

import './_click.js';
import './_buy.js';
import './_ressource.js';
import './_sell.js';
import './_tax.js';

import { StatClass } from './class/statClass.js';
import { GameClass } from './class/gameClass.js';
import { MinorClass } from './class/minorClass.js';
import { BlacksmithClass } from './class/blacksmithClass.js';
import { PriceClass } from './class/priceClass.js';


/**
 * load stats
 */
window.addEventListener('load' , () => {
    let Game;
    let UserStat;
    if (window.localStorage.getItem('Game') === null) {
        let UserStat = new StatClass;
        let Minor = new MinorClass;
        let Blacksmith = new BlacksmithClass;
        let Price = new PriceClass;
        Game = new GameClass(
            UserStat,
            Minor,
            Blacksmith,
            Price
        );
        setInLocalGame(Game);
    } else {
        Game = getGameClass();
        UserStat = Game.UserStat;
    };
    refreshStat(UserStat);
});
