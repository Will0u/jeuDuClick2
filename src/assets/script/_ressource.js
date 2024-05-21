import { getGameClass, refresh } from "./_function";

/**
 * Increment according interval, ressources
 * @param {*} workerName 
 * @param {*} interval 
 */
function ressourceGenerator(
    workerName,
    interval,
) {
    setInterval(() => {
        let Game = getGameClass();
        let UserStat = Game.UserStat;
        if (workerName === 'blacksmith') {
            UserStat.sword += Game.Blacksmith.sword * UserStat.blacksmith;
            UserStat.armor += Game.Blacksmith.armor * UserStat.blacksmith;
        } else if (workerName === 'minor') {
            UserStat.stone += Game.Minor.stoneAmount * UserStat.minor;
            UserStat.iron += Game.Minor.ironAmount * UserStat.minor;
        }
        refresh(Game,UserStat);
    },interval);
};

ressourceGenerator('minor',5500);
ressourceGenerator('blacksmith',7500);
