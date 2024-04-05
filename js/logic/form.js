
import { sign_up } from "../functions/sign_up.js"
import { reservation } from "../functions/reservation.js"
import { variables } from "../DOM/domVariables.js"

export const form = (function () {

    const { givingData } = sign_up;
    const { givingDataReservation } = reservation;
    const { signUp_button, reservation_button } = variables;
    let executed;
    let executedReservation;

    const message = (message, type) => {
        const div = document.createElement("div");
        div.textContent = message;

        setTimeout(() => {
            div.classList.add("message");
        }, 100);

        div.classList.add("mess__successful") ? type === "successful" : div.classList.add("mess__error")
        document.querySelector("#to-message").appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 4000);
    }

    const buildingMessage = (outcome, type) => {

        if (!document.querySelector(".message")) {
            if (emptyFields(outcome)) {
                message("Error en los datos, verificar informacion", "error");
                return
            }

            if (type === "signup") {
                message("Exito al guardar los datos", "successful");
            } else {
                message("Exito al crear la reservacion", "successful");
            }
        }

    }

    const emptyFields = data => data.some(info => info === "");

    const validatingData = evt => {
        evt.preventDefault()
        let outcome;
        let type;

        if (document.querySelector("#sign-up")) {
            const inf = givingData();
            outcome = inf[0]
            type = inf[1]
        }

        else if (document.querySelector("#reservationMain")) {
            const inf = givingDataReservation();
            outcome = inf[0]
            type = inf[1]
        }
        buildingMessage(outcome, type);

    }

    if (document.querySelector("#sign-up")) {
        executed: signUp_button.addEventListener("click", validatingData)
    }

    else if (document.querySelector("#reservationMain")) {
        executedReservation: reservation_button.addEventListener("click", validatingData)
    }

    return {
        executed,
        executedReservation
    }
})();