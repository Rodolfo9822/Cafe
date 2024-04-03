import { mealsData } from "../API/mealsAPI.js"
import { cards } from "../functions/buildingCards.js"


export const mealsPattern = (function () {
    const { categories, lookingForMeals } = mealsData;
    const { GivingCards } = cards

    const redoingData = ({ meals }) => {
        let newData = []
        for (let i = 0; i < 12; i++) {
            const { strMeal, strMealThumb, idMeal } = meals[i];
            newData = [...newData, {
                "id": idMeal,
                "name": strMeal,
                "image": strMealThumb,
                "price": "$150.00",
                "quantity": "0",
            }]
        }
        return newData;
    }

    const buildingCards = (name, quantity, data) => {
        let lessThanTen = []
        if (quantity > 12) {
            const newData = redoingData(data);
            GivingCards(newData, name);
            return
        }
    }



    const diggIntoMeals = ({ categories }) => {
        categories.forEach(async kindOf => {
            const name = kindOf.strCategory
            const data = await lookingForMeals(name);
            const quantity = data["meals"].length;
            buildingCards(name, quantity, data);
        });
    }

    const fleshOutCategories = async () => await categories();

    const toStart = async () => {
        diggIntoMeals(await fleshOutCategories());
    }

    return {
        toStart
    }

})();


