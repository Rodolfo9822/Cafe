import { variables } from "../DOM/domVariables.js"


export const promoteAnimation = (function () {
    let executed;

    const promoteData = {
        "coffee": {
            "slogan": "Despierta tus sentidos con el aroma de un perfecto cafe",
            "nameButton": "Cafe"
        },
        "desserts": {
            "slogan": "Endulza tu vida con nuestros irresistibles postre",
            "nameButton": "Postres"
        },
        "beans": {
            "slogan": "Saborea la excelencia culinaria en cada bocado",
            "nameButton": "Granos"
        },
    }

    const { promote } = variables;


    const buildingOnFeatures = kindOfCard => {
        const { slogan, nameButton } = promoteData[kindOfCard];
        const container = document.createElement("div");

        const lineOne = document.createElement("div");
        const lineTwo = document.createElement("div");
        lineOne.classList.add("animation__line");
        lineTwo.classList.add("animation__line");

        const elements = document.createElement("div");
        elements.classList.add("animation__elements");

        const text = document.createElement("p");
        text.textContent = slogan;
        text.classList.add("animation__text")

        const button = document.createElement("a");
        button.textContent = nameButton;
        button.href = "#";
        button.classList.add("animation__button");

        elements.appendChild(text);
        elements.appendChild(button);
        container.classList.add("animation");
        container.appendChild(lineOne);
        container.appendChild(elements);
        container.appendChild(lineTwo);
        return container;
    }

    const addingAnimation = card => {
        const kindOfCard = card.getAttribute("name");
        const container = buildingOnFeatures(kindOfCard);
        container.onmouseout = function () {
            container.remove();
        }
        card.appendChild(container);

    }

    const toTrigger = evt => {


        if (evt.target.classList.contains("promote__img")) {
            addingAnimation(evt.target.parentElement);
        }
    }


    if (promote) {
        executed: promote.addEventListener("mouseover", toTrigger);
    }

    return {
        executed
    }

})();