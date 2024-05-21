export let MinorClass = class {
    constructor(
        name = 'minor',
        stoneAmount = 3,
        ironAmount = 1,
        price = 75,
        salary = 50
    ) {
        this.name = name;
        this.stoneAmount = stoneAmount;
        this.ironAmount = ironAmount;
        this.price = price;
        this.salary = salary;
    }
};