import { coffeeData } from "../API/coffeeAPI.js"
import { cards } from "../functions/buildingCards.js"

export const coffeePattern = (function () {
    const { allTheCoffee, type: { hot, iced } } = coffeeData;
    const { GivingCards } = cards;

    const buildingData = async () => {
        const data = await gettingDrinks();
        let featuresCard = [];
        data.forEach(drink => {
            featuresCard = [...featuresCard,
            {
                "id": drink.id,
                "name": drink.title,
                "image": drink.image,
                "price": "$60.00",
                "quantity": "375ml",
            }
            ]
        });
        const quantity = featuresCard.length
        return featuresCard.splice(0, (quantity - 2));
    }

    const gettingDrinks = async () => {
        try {
            return [...await allTheCoffee(hot), ...await allTheCoffee(iced)]
        } catch (error) {
            console.log(error);
        }
    }

    const ToStart = async () => {
        const info = await buildingData()
        GivingCards(info, "Cafe & bebidas")

    }

    return {
        ToStart
    }

})();