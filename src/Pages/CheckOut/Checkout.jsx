import React, { useState } from 'react'
import { CreditCard } from '../../Components/CreditCard/CreditCard';

const Checkout = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };
    const handleInputFocus = (e) => {
        setState((prevState) => ({
            ...prevState,
            focus: e.target.name
        }));
    }
    const formInput = [
        {
            name: 'number',
            placeholder: 'Card Number',
            type: 'number',
            value: state.number,
            class: 'w-full'
        },
        {
            name: 'text',
            placeholder: 'Your Name',
            type: 'text',
            value: state.name,
            class: 'w-full'

        },

    ]
    return (
        <section
            className=' m-20 mx-auto w-2/3'
        >
            <CreditCard
                className='border border-black'
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <form
                className='flex flex-wrap justify-center py-4 px-10 mt-4 gap-4 w-full   border border-red-400'
            >
                {
                    formInput.map((data, index) => (
                        <input
                            className={data.class}
                            index={index}
                            type={data.type}
                            name={data.name}
                            placeholder={data.placeholder}
                            value={data.value}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    ))
                }
                <div
                    className='flex justify-between w-full'
                >
                    <input
                        className='w-1/3'
                        type='number'
                        name='expiry'
                        placeholder='MM/AA'
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        className='w-1/3'
                        name='cvc'
                        placeholder='CVC'
                        type='number'
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <button
                    className='w-36 p-2 bg-emerald-400 rounded text-white'
                >
                    PAY
                </button>
            </form>
        </section>
    )
}

export default Checkout
