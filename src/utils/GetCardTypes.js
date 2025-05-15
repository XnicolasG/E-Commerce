const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^(5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})$/,
};

export const GetCardType = (number) => {
    const cleaned = number.replace(/\D+/g, '');
    return Object.keys(cardPatterns).find(type => cardPatterns[type].test(cleaned)) || 'default';
};