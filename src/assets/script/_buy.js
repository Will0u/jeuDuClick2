import { calculator, htmlUpdater } from "./main";

let buyBtnArray = document.querySelectorAll('#buyBtn');

/**
 * apply shop system to every buyBtn
 */
buyBtnArray.forEach(btn => {
    btn.addEventListener('click', () => {
        let money = window.localStorage.getItem('money');
        let productPrice = parseInt(btn.getAttribute('price'));
        let product = btn.getAttribute('name');
        
        if (parseInt(money) >= productPrice ) {
            window.localStorage.setItem('money',parseInt(money) - productPrice);

            window.localStorage.setItem('income', parseInt(window.localStorage.getItem('income')) + parseInt(btn.getAttribute('income')));

            calculator(product);
            htmlUpdater('money','money');
            htmlUpdater(product,product);
            htmlUpdater('income','income');
        } else {
            console.log('non');
        }
    });
});