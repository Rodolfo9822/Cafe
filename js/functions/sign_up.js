import { variables } from "../DOM/domVariables.js"


export const sign_up = (function () {
    const { account } = variables

    const givingData = () => {
        let information = []
        for (let [propiedad, valor] of Object.entries(account)) {
            information = [...information, valor.value]
        }
        return [information, "signup"];
    }



    return {
        givingData
    }


})();