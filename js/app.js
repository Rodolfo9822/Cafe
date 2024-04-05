import { coffeePattern } from "./logic/coffee.js"
import { mealsPattern } from "./logic/meals.js"
import { form } from "./logic/form.js"
import { promoteAnimation } from "./animations/promotes.js"
import { variables } from "./DOM/domVariables.js"


const showing = async () => {

    const { menu, promote } = variables;
    if (menu) {
        coffeePattern.ToStart();
        mealsPattern.toStart();
    }

    promoteAnimation.executed;
    form.executed;
    form.executedReservation;

}


window.addEventListener("DOMContentLoaded", () => {
    showing();
})


