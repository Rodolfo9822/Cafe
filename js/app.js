import { coffeePattern } from "./logic/coffee.js"
import { mealsPattern } from "./logic/meals.js"


const showing = async () => {
    coffeePattern.ToStart();
    mealsPattern.toStart();

}


window.addEventListener("DOMContentLoaded", () => {
    showing();
})


