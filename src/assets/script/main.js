import './../style/main.scss';
import './_click.js';
import './_buy.js';
import './_income.js';

/**
 * load stats
 */
window.addEventListener('load' , () => {
    let spanArray = document.querySelectorAll('span');
    spanArray.forEach(span => {
        if (window.localStorage.getItem(span.getAttribute('name')) === null) {
            window.localStorage.setItem(span.getAttribute('name'),0);
        } 
        span.innerHTML = window.localStorage.getItem(span.getAttribute('name'));
    });
});

/**
 * 
 * @param {*} htmlId 
 * @param {*} attribute 
 * update HTML Element increment
 */
export function htmlUpdater(htmlId,attribute) {
    let htmlElement = document.querySelector(`#${htmlId}`);
    htmlElement.innerHTML = window.localStorage.getItem(attribute);
};

/**
 * 
 * @param {*} name 
 * increment in localStorage name value
 */
export function calculator(name) {
    window.localStorage.setItem(name,parseInt(window.localStorage.getItem(name)) + 1);
}