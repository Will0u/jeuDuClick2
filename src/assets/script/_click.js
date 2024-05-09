import { calculator, htmlUpdater } from "./main";

let clickBtn = document.querySelector('#clickBtn');

/**
 * click
 * add 1 click to clickStat
 * add 1 money to money
 */
clickBtn.addEventListener('click', () => {
    let clickStatAttribute = clickBtn.getAttribute('name');
    let moneyAttribute = clickBtn.getAttribute('target');
    
    calculator(clickStatAttribute)
    calculator(moneyAttribute);
    htmlUpdater(clickStatAttribute,clickStatAttribute);
    htmlUpdater(moneyAttribute,moneyAttribute);
});
