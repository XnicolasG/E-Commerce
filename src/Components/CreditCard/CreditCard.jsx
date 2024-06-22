import React from 'react'

export const CreditCard = ({
    number,
    expiry,
    cvc,
    name,
    focused }) => {
    return (
        <section
            className='w-42 h-auto p-2 border border-black rounded'
        >
            <div>
                <p>{!number ? '**** **** **** ****' : number}</p>
                <p>{!expiry ? 'MM/AA' : expiry}</p>
                <p>{!name ? 'Your Name' : name}</p>
            </div>

            <div>
                <p>{!cvc ? 'CVC' : cvc}</p>
            </div>

        </section>
    )
}
