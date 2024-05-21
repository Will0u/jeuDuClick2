import { getGameClass, refresh } from "./_function";

function tax() {
    setInterval(() => {
        let Game = getGameClass(); 
        let UserStat = Game.UserStat;
        let Minor = Game.Minor;
        let Blacksmith = Game.Blacksmith;
        let tax = 
        (UserStat.minor * Minor.salary) +
        (UserStat.blacksmith * Blacksmith.salary)

        UserStat.money = 
        UserStat.money - tax;

        refresh(Game,UserStat);
    }, 30000);
};

tax();