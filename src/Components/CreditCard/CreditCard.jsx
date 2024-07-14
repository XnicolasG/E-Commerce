import React from 'react'
import { MasterCard } from '../../img/svg/MasterCard';
import { CreditCardChip } from '../../img/svg/CreditCardChip';
import { CreditCardSignal } from '../../img/svg/CreditCardSignal';

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
            <section className='credit-card_front shadow-md shadow-black/60' aria-label="Credit Card Information">
                <div className=' relative  text-stone-200 col-start-1 h-full '>
                    <span className="circle circle1 bg-red-600/90"></span>
                    <span className="circle circle2 bg-yellow-500/90"></span>
                    <div className='backdrop-blur-md flex flex-col justify-end p-3 w-full  h-full'>
                        <p>{maskCreditCardNumber(number)}</p>
                        <div className='flex'>
                            <p>{!expiryMonth ? 'MM' : expiryMonth}</p>
                            <p>/</p>
                            <p>{!expiryYear ? 'AA' : expiryYear}</p>
                        </div>
                        <p className=''>{!name ? 'Your Name' : name}</p>
                    </div>
                </div>
                <aside className=' flex flex-col justify-between items-center p-2  bg-gradient-to-br from-amber-300 to-indigo-600 col-start-2 w-full h-full'>
                    <div className='pt-2'>
                        <CreditCardSignal  className=' rotate-90' />
                    </div>
                    <MasterCard className={`size-10`} />
                </aside>
            </section>

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
