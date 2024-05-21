import { getGameClass, refresh } from "./_function";

let clickBtn = document.querySelector('#clickBtn');

/**
 * click
 * add 1 click to clickStat
 * add 1 money to money
 */
clickBtn.addEventListener('click', () => {
    let Game = getGameClass();
    Game.UserStat.incrementClickMoney();
    refresh(Game,Game.UserStat);
});
