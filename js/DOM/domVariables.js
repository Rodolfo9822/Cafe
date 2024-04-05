

export const variables = (function () {

    const menu = document.querySelector("#menu");
    const promote = document.querySelector("#promote");
    const name_account = document.querySelector("#name_account");
    const nickname_account = document.querySelector("#nickname_account");
    const telefono_account = document.querySelector("#telefono_account");
    const email_account = document.querySelector("#email_account");
    const password_account = document.querySelector("#password_account");
    const repeated_account = document.querySelector("#repeated_account");
    const signUp_button = document.querySelector("#signUp_button");

    const name_reservation = document.querySelector("#name_reservation");
    const phone_reservation = document.querySelector("#phone_reservation");
    const email__reservation = document.querySelector("#email_reservation");
    const fecha__reservation = document.querySelector("#fecha_reservation");
    const personas__reservation = document.querySelector("#personas_reservation");
    const reservation_button = document.querySelector("#reservation-button");


    return {
        menu,
        promote,
        signUp_button,
        reservation_button,
        account: {
            name_account,
            nickname_account,
            telefono_account,
            email_account,
            password_account,
            repeated_account
        },
        reservationDom: {
            name_reservation,
            phone_reservation,
            email__reservation,
            fecha__reservation,
            personas__reservation,
        }

    }

})();