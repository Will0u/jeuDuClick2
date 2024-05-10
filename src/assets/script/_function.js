import { BlacksmithClass } from "./class/blacksmithClass";
import { GameClass } from "./class/gameClass";
import { MinorClass } from "./class/minorClass";
import { StatClass } from "./class/statClass";

/**
 * get Game
 * @returns Game class
 */
export function getGameClass() {
    let raw = JSON.parse(window.localStorage.getItem('Game'));
    let UserStat = new StatClass(
        raw.UserStat.click,
        raw.UserStat.minor,
        raw.UserStat.iron,
        raw.UserStat.blacksmith,
        raw.UserStat.money,
        raw.UserStat.income,
        raw.UserStat.lostMoney,
        raw.UserStat.stone,
        raw.UserStat.sword,
        raw.UserStat.armor
    );
    let Minor = new MinorClass(
        raw.Minor.name,
        raw.Minor.stoneAmount,
        raw.Minor.ironAmount,
        raw.Minor.price,
        raw.Minor.salary
    );

    let Blacksmith = new BlacksmithClass(
        raw.Blacksmith.name,
        raw.Blacksmith.sword,
        raw.Blacksmith.armor,
        raw.Blacksmith.price,
        raw.Blacksmith.salary
    );

    let Game = new GameClass(
        UserStat,
        Minor,
        Blacksmith,
    );
    return Game;
};


/**
 * set in localStorage Game
 * @param {*} UserStatObject Stat class
 */
export function setInLocalGame(GameObject) {
    window.localStorage.setItem('Game', JSON.stringify(GameObject));
};


/**
 * refresh stats
 * @param {*} UserStatObject Stat class
 */
export function refreshStat(UserStatObject) {
    let statSpanArray = document.querySelectorAll('#stat');
    statSpanArray.forEach(span => {
        for (const stat in UserStatObject) {
            if (span.getAttribute('name') === stat) {
                span.innerHTML = UserStatObject[stat];
            }
        };
    });
};