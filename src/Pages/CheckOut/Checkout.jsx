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

    const formatCreditCardNumber = (value) => {
        // Limpia el valor eliminando cualquier carácter que no sea un dígito
        const cleaned = value.replace(/\D+/g, '');
    
        // Formatea el número agrupando los dígitos en grupos de 4
        const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    
        // Asegúrate de que no exceda los 16 dígitos
        return formatted.slice(0, 16);
    };

    const formatExpirationDate = (value) => {
        const cleaned = value.replace(/\D+/g, '');
        const month = cleaned.slice(0, 2);
        const year = cleaned.slice(2, 4);
        const fullDate = `${month}/${year}`
        return fullDate.slice(0, 4)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        const formattedValue = name === 'number' ? formatCreditCardNumber(value) : value;
        const formattedDate = name === 'expiry' ? formatExpirationDate(value) : value;
        setState((prevState) => ({
            ...prevState,
            //[name] los brackets en este caso detectan dinamicamente el valor de entrada que esta condicionada en el evento
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
                            onInput={(e) => {
                                if(data.name === 'number'){
                                    if (e.target.value.length > 16) {
                                        e.target.value = e.target.value.slice(0, 16);
                                    }
                                }else if (e.target.value.length > 25) {
                                    e.target.value = e.target.value.slice(0, 25);
                                }
                            }}
                            required
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
                        required

                    />
                    <input
                        className='w-1/3 inputStyle'
                        name='cvc'
                        placeholder='CVC'
                        type='number'
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onInput={(e) => {
                            if (e.target.value.length > 3) {
                                e.target.value = e.target.value.slice(0, 3);
                            }
                        }}
                        required
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
