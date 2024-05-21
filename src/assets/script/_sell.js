import { getGameClass, refresh } from "./_function";

let ressourceSpanArray = document.querySelectorAll('#stat[type="ressource"]');

/**
 * every 1750ms, decrement ressources and add money to UserStat money according to Price Class
 * @param {*} spanArray 
 */
function sell(spanArray=ressourceSpanArray) {
    setInterval(() => {
        let Game = getGameClass();
        let UserStat = Game.UserStat;
        let Price = Game.Price;

        spanArray.forEach(span => {
            if (UserStat[span.getAttribute('name')] > 0) {
                UserStat[span.getAttribute('name')] = --UserStat[span.getAttribute('name')];
                UserStat.money = UserStat.money + Price[span.getAttribute('name')];
            }
        });
        refresh(Game,UserStat);
    },1750);
};

sell();
