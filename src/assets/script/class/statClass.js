export let StatClass = class {
    constructor(
        click = 0,
        minor = 0,
        iron = 0,
        blacksmith = 0,
        money = 0,
        tax = 0,
        income = 0,
        lostMoney = 0,
        stone = 0,
        sword = 0,
        armor = 0
    ) {
        this.click = click;
        this.minor = minor;
        this.iron = iron;
        this.blacksmith = blacksmith;
        this.money = money;
        this.tax = tax;
        this.income = income;
        this.lostMoney = lostMoney;
        this.stone = stone;
        this.sword = sword;
        this.armor = armor;
    }

    incrementClickMoney() {
        this.click = ++this.click;
        this.money = ++this.money;
    }

    pay(amount) {
        this.money = this.money - amount;
    }
};