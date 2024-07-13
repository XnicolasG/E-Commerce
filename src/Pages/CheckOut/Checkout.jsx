import React, { useState } from 'react'
import { CreditCard } from '../../Components/CreditCard/CreditCard';

const Checkout = () => {
    const [state, setState] = useState({
        number: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: '',
        name: '',
        focus: '',
        error: ''
    });
    const CARD_LENGTH = 16;
    const NAME_LENGTH = 2;
    

    const formatCreditCardNumber = (value) => {
        // Limpia el valor eliminando cualquier carácter que no sea un dígito
        const cleaned = value.replace(/\D+/g, '');
        // Formatea el número agrupando los dígitos en grupos de 4
        const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
        // Asegúrate de que no exceda los 16 dígitos
        return formatted.slice(0, 16);
    };
    const validateCardNumber = (value) => {
        if (value.length < 16) {
            setState((prevState) => ({
                ...prevState,
                error: 'Please check the card number details!'
            }))
        } else {
            setState((prevState) => ({
                ...prevState,
                error: ''
            }))
        }

    };
    const validateCvc = (value) => {
        if (value.length < 3) {
            setState((prevState) => ({
                ...prevState,
                error: 'Please check the cvc number '
            }))
        } else {
            setState((prevState) => ({
                ...prevState,
                error: ''
            }))
        }
    }

    const currentYear = new Date().getFullYear() % 100;
    const validateExpiryDate = (month, year) => {
        const currentMonth = new Date().getMonth() + 1;
        const monthValue = parseInt(month, 10);
        const yearValue = parseInt(year, 10);
        console.log({ currentMonth, monthValue, currentYear, yearValue });
        if (yearValue < currentYear || (yearValue === currentYear && monthValue < currentMonth)) {
            console.warn('check the info, date is expired');
            setState((prevState) => ({
                ...prevState,
                error: 'Please check the expiry info !'
            }));
        }else {
            setState((prevState) => ({
                ...prevState,
                error: ''
            }))
        }
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        let formattedValue = value;
        if (name === 'number') {
            formattedValue = formatCreditCardNumber(value);
        }
        setState((prevState) => ({
            ...prevState,
            //[name] los brackets en este caso detectan dinamicamente el valor de entrada que esta condicionada en el evento
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateExpiryDate(state.expiryMonth, state.expiryYear);
        validateCardNumber(state.number)
        validateCvc(state.cvc);
        console.log('submit', state.error);
        
    }
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
            class: 'inputStyle w-1/2',
            min: CARD_LENGTH
        },
        {
            name: 'name',
            placeholder: 'Your Name',
            type: 'text',
            value: state.name,
            class: 'inputStyle w-1/2',
            min: NAME_LENGTH

        },

    ]
    return (
        <section
            className=' flex flex-col items-center py-4 m-20 mx-auto w-[90%] md:w-[80%] lg:w-1/2 border border-black'
        >
            <CreditCard
                className='  border border-black'
                number={state.number}
                expiryMonth={state.expiryMonth}
                expiryYear={state.expiryYear}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <form
                onSubmit={handleSubmit}
                className=' flex flex-col items-center py-4 mt-4 gap-4 w-full '
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
                                if (data.name === 'number') {
                                    if (e.target.value.length > 16) {
                                        e.target.value = e.target.value.slice(0, 16);
                                    }
                                } else if (e.target.value.length > 25) {
                                    e.target.value = e.target.value.slice(0, 25);
                                }
                            }}
                            required
                            {...(data.type === 'text') ? { minLength: data.min } :
                                data.type === 'number' ? { min: data.min } : {}}
                        />
                    ))
                }
                <div
                    className='flex justify-between w-1/2'
                >
                    <div className="w-1/2 flex items-center gap-x-3 ">
                        <select
                            className='w-1/2 text-center inputStyle'
                            type='number'
                            name='expiryMonth'
                            placeholder='MM'
                            value={state.expiryMonth}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            required
                        >
                            <option  value="">-</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <p className='text-3xl  my-auto font-extralight text-gray-400'>/</p>
                        <select
                            className='w-1/2 text-center inputStyle'
                            type='number'
                            name='expiryYear'
                            placeholder='AA'
                            value={state.expiryYear}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            required
                        >
                            <option value="">-</option>
                            {Array.from({ length: 10 }, (_, i) => currentYear + i).map(year => (
                                <option key={year} value={year % 100}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        className='w-1/4 text-center inputStyle'
                        name='cvc'
                        placeholder='CVC'
                        type='number'
                        value={state.cvc}
                        min={3}
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

                    <p className={`text-xs ${state.error ? 'text-red-600' : 'text-transparent'} transition-all `}> {state.error}</p>
                
                <button
                    className='w-36 p-2 mt-1 bg-emerald-400 rounded text-white hover:scale-110 hover:bg-emerald-500 cursor-pointer transition-all'
                >
                    PAY
                </button>
            </form>
        </section>
    )
}

export default Checkout

// 24070932891215 radicado cancelación seguro sura