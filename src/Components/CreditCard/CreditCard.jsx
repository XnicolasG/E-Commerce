import React from 'react'

export const CreditCard = ({
    number,
    expiry,
    cvc,
    name,
    focused }) => {
    return (
        <section
            className={`credit-card ${focused === 'cvc' ? 'flipped' : ''}`}
        >
            <div className='credit-card_front'>
                <p>{!number ? '**** **** **** ****' : number}</p>
                <p>{!expiry ? 'MM/AA' : expiry}</p>
                <p>{!name ? 'Your Name' : name}</p>
            </div>

            <div className='credit-card_back'>
                <p>{!cvc ? 'CVC' : cvc}</p>
            </div>

        </section>
    )
}
