import { useState } from "react";
import { validateFieldLength } from "../../utils/checkout/validateFieldLength";

export const useCreditCardValidation = () => {
    const [validationErrors, setValidationsErrors] = useState({
        cardNumberError: false,
        expirationError: false,
        cvcError: false,
    });

    const currentYear = new Date().getFullYear() % 100;

    // Validación de número de tarjeta
    const validateCardNumber = (value) => {
        validateFieldLength({ value, minLength: 16, setState: setValidationsErrors, error: 'cardNumberError', errorMessage: true });
    };

    // Validación de CVC
    const validateCvc = (value) => {
        validateFieldLength({ value, minLength: 3, setState: setValidationsErrors, error: 'cvcError', errorMessage: true });
    };

    // Validación de fecha de expiración
    const validateExpiryDate = (month, year) => {
        const currentMonth = new Date().getMonth() + 1;
        const monthValue = parseInt(month, 10);
        const yearValue = parseInt(year, 10);

        setValidationsErrors((prevState) => ({
            ...prevState,
            expirationError: yearValue < currentYear || (yearValue === currentYear && monthValue < currentMonth)
        }));
    };

    return {
        validateCardNumber,
        validateCvc,
        validateExpiryDate,
        validationErrors,
        currentYear
    };
};