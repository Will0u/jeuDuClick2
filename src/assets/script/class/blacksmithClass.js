export let BlacksmithClass = class {
    constructor(
        name = 'blacksmith',
        sword = 2,
        armor = 2,
        price = 150,
        salary = 100
    ) {
        this.name = name;
        this.sword = sword;
        this.armor = armor;
        this.price = price;
        this.salary = salary;
    }
};