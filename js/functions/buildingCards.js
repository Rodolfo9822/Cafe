import { variables } from "../DOM/domVariables.js"


export const cards = (function () {
    const { menu } = variables;

    const designing = (info, title) => {
        const section = document.createElement("section");
        section.classList.add("menu__grid");

        const whichTitle = document.createElement("h2");
        whichTitle.classList.add("menu__title");
        whichTitle.textContent = title;

        const container = document.createElement("ol");
        container.classList.add("product")

        info.forEach(element => {
            const { id, name, image, price, quantity } = element;

            const box = document.createElement("li");
            box.setAttribute("id", id);
            box.classList.add("product__box");

            const imgDiv = document.createElement("div");
            imgDiv.classList.add("product__img-div");
            const img = document.createElement("img");
            img.classList.add("product__img");
            img.alt = `Imagen de ${name}`;
            img.src = image;
            imgDiv.appendChild(img);

            const coffeeName = document.createElement("p");
            coffeeName.textContent = name;
            coffeeName.classList.add("product__name");

            const featureBox = document.createElement("div");
            featureBox.classList.add("product__feature-box");

            const coffeeQuantity = document.createElement("p");
            coffeeQuantity.textContent = quantity;
            coffeeQuantity.classList.add("product__quantity");

            const coffePrice = document.createElement("p");
            coffePrice.textContent = price;
            coffePrice.classList.add("product__price");

            featureBox.appendChild(coffeeQuantity);
            featureBox.appendChild(coffePrice);

            box.appendChild(imgDiv);
            box.appendChild(coffeeName);
            box.appendChild(featureBox);

            container.appendChild(box);
        });

        menu.appendChild(container);
    }



    const GivingCards = (information, title) => {
        designing(information, title);
    }

    return {
        GivingCards
    }
})();



