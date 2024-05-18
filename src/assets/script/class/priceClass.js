export let PriceClass = class {
    constructor(
        stone = 1,
        iron = 3,
        sword = 6,
        armor = 7,
    ) {
        this.stone = stone;
        this.iron = iron;
        this.sword = sword;
        this.armor = armor;
    }
};