import React from 'react'
import { MasterCard } from '../../img/svg/MasterCard';
import { CreditCardChip } from '../../img/svg/CreditCardChip';
import { CreditCardSignal } from '../../img/svg/CreditCardSignal';
import { GetCardType } from '../../utils/GetCardTypes';
import { MasterCardComponent } from './MasterCard';
import { DefaultComponent } from './DefaultComponent';
import { VisaComponent } from './VisaComponent';

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
    const cardType = GetCardType(number);
    let cardComponent;
    switch (cardType) {
        case 'visa':
            cardComponent = VisaComponent;
            console.log('visa');
            break;
        case 'mastercard':
            cardComponent = MasterCardComponent;
            console.log('MC');

        default:
            cardComponent = DefaultComponent;
            console.log('DEf');

            break;
    }
    return (
        <section
            className={`credit-card ${focused === 'cvc' ? 'flipped' : ''}`}
        >
            <VisaComponent
            number={number} 
            expiryMonth={expiryMonth} 
            expiryYear={expiryYear} 
            name={name}
            maskCreditCardNumber={maskCreditCardNumber}
            />

            <div className='credit-card_back text-stone-200  shadow-md shadow-black/60'>
                <div className='flex w-[85%] justify-center gap-x-2'>
                <input 
                className='italic w-[65%] overflow-ellipsis px-2 text-gray-900 bg-gray-300'
                type="text" value={name} readOnly />
                <p className='w-[20%]'>{!cvc ? 'CVC' : cvc}</p>
                </div>
            </div>

        </section>
    )
}
