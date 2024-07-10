import React from 'react'

export const CreditCard = ({
    number,
    expiryMonth,
    expiryYear,
    cvc,
    name,
    focused }) => {
        const maskCreditCardNumber = (number) => {
            const cleaned = number.replace(/\D+/g, '').slice(0, 16);
            const masked = cleaned.padEnd(16, '*');
            const formatted = masked.replace(/(.{4})/g, '$1 ').trim();
            return formatted;
          };
    return (
        <section
            className={`credit-card ${focused === 'cvc' ? 'flipped' : ''}`}
        >
            <div className='credit-card_front'>
                <p>{maskCreditCardNumber(number)}</p>
                <div className='flex'>
                <p>{!expiryMonth ? 'MM' : expiryMonth}</p>
                <p>/</p>
                <p>{!expiryYear ? 'AA' : expiryYear}</p>
                </div>
                <p>{!name ? 'Your Name' : name}</p>
            </div>

            <div className='credit-card_back'>
                <p>{!cvc ? 'CVC' : cvc}</p>
            </div>

        </section>
    )
}
