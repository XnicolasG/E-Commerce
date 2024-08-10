export const validateFieldLength = ({ value, minLength, setState, error, errorMessage }) => {
    if (value.length < minLength) {
        setState((prevState) => ({
            ...prevState,
            [error]: errorMessage
        }))
} else {
    setState((prevState) => ({
            ...prevState,
            [error]: ''
    }))
    }
};