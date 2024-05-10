import { getGameClass, refreshStat, setInLocalGame } from "./_function";

let clickBtn = document.querySelector('#clickBtn');

/**
 * click
 * add 1 click to clickStat
 * add 1 money to money
 */
clickBtn.addEventListener('click', () => {
    let Game = getGameClass();
    Game.UserStat.incrementClickMoney();
    setInLocalGame(Game);
    refreshStat(Game.UserStat);
});
