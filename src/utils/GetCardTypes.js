export const GetCardType = (number) => {
    const cleaned = number.replace(/\D+/g, '');
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cleaned)) {
        return 'visa';
    } else if (/^5[1-5][0-9]{14}$/.test(cleaned) || /^(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(cleaned)) {
        return 'mastercard';
    } else {
        return 'default';
    }
}