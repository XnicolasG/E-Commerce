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
            class: 'inputStyle w-1/2'
        },
        {
            name: 'name',
            placeholder: 'Your Name',
            type: 'text',
            value: state.name,
            class: 'inputStyle w-1/2'

        },

    ]
    return (
        <section
            className='flex flex-col items-center py-4 m-20 mx-auto w-1/2 border border-black'
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
                className='flex flex-col items-center py-4 mt-4 gap-4 w-full '
            >
                {
                    formInput.map((data, index) => (
                        <input
                            key={index}
                            className={data.class}
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
                    className='flex justify-between w-1/2'
                >
                    <input
                        className='w-1/3 inputStyle'
                        type='number'
                        name='expiry'
                        placeholder='MM/AA'
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        className='w-1/3 inputStyle'
                        name='cvc'
                        placeholder='CVC'
                        type='number'
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <button
                    className='w-36 p-2 mt-4 bg-emerald-400 rounded text-white hover:scale-110 cursor-pointer transition-all'
                >
                    PAY
                </button>
            </form>
        </section>
    )
}

export default Checkout
