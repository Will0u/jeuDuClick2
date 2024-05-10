export let MinorClass = class {
    constructor(
        name = 'minor',
        stoneAmount = 3,
        ironAmount = 1,
        price = 3,
        salary = 75
    ) {
        this.name = name;
        this.stoneAmount = stoneAmount;
        this.ironAmount = ironAmount;
        this.price = price;
        this.salary = salary;
    }
};