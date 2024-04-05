
import { variables } from "../DOM/domVariables.js"

export const reservation = (function () {

    const { reservationDom } = variables

    const givingDataReservation = () => {
        let information = []
        for (let [propiedad, valor] of Object.entries(reservationDom)) {
            information = [...information, valor.value]
        }
        return [information, "signup"];
    }



    return {
        givingDataReservation
    }

})();