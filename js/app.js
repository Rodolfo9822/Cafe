/* import { coffeeData } from "./API/coffeeAPI.js"; */
import { mealsData } from "./API/mealsAPI.js";

const showing = async () => {
    /*
    const drinks = await coffeeData("hot");
    const drinksIced = await coffeeData("iced");
    console.log(drinks);
    console.log(drinksIced);
    */

    const whichCategories = await mealsData();
    console.log(whichCategories.categories);

}


window.addEventListener("DOMContentLoaded", () => {
    showing();
})


