import { useState } from "react";

export const useCreditCardValidation = () => {
    const [state, setState] = useState({
        cardNumberError: "",
        expirationDateError: "",
        cvcError: "",
    })
    const validateCardNumber = (value) => {
        if (value.length < 16) {
            setState((prevState) => ({
                ...prevState,
                cardNumberError: 'Please check the card number details!'
            }))
        } else {
            setState((prevState) => ({
                ...prevState,
                cardNumberError: ''
            }))
        }
    };
    const validateCvc = (value) => {
        if (value.length < 3) {
            setState((prevState) => ({
                ...prevState,
                cvcError: 'Please check the cvc number '
            }))
        } else {
            setState((prevState) => ({
                ...prevState,
                cvcError: ''
            }))
        }
    }
    return {}
}
