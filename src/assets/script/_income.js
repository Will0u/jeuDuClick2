import { htmlUpdater } from "./main";

/**
 * check money exist
 * start when money > 0
 * every 5000ms, income fc
 */
if (money != null) {
    setInterval(income ,5000);
}

/**
 * add income to money in localstorage
 */
function income() {
    window.localStorage.setItem('money', parseInt(window.localStorage.getItem('money')) + parseInt(window.localStorage.getItem('income')));
    htmlUpdater('money','money');
}
