import { useState } from "react";
import { validateFieldLength } from "../../utils/checkout/validateFieldLength";



export const useCreditCardValidation = ({currentYear}) => {
    const [validationErrors, setValidationsErrors] = useState({
        cardNumberError: "",
        expirationError: "",
        cvcError: "",
    })
    const validateCardNumber = (value) => {
        validateFieldLength({ value, minLength: 16, setValidationsErrors, error: 'numberError', errorMessage: 'Please check the card number details!' });
    };
    const validateCvc = (value) => {
        validateFieldLength({ value, minLength: 3, setValidationsErrors, error: 'cvcError', errorMessage: 'Please check the cvc details!' });
    }
    const validateExpiryDate = (month, year) => {
        const currentMonth = new Date().getMonth() + 1;
        const monthValue = parseInt(month, 10);
        const yearValue = parseInt(year, 10);
        console.log({ currentMonth, monthValue, currentYear, yearValue });
        if (yearValue < currentYear || (yearValue === currentYear && monthValue < currentMonth)) {
            console.warn('check the info, date is expired');
            setValidationsErrors((prevState) => ({
                ...prevState,
                expirationError: 'Please check the expiry info !'
            }));
        } else {
            setValidationsErrors((prevState) => ({
                ...prevState,
                expirationError: ''
            }))
        }
        return '';
    };


    return {
        validateCardNumber,
        validateCvc,
        validateExpiryDate,
        validationErrors
    }
}
