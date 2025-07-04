import { useCreditCardValidation } from '../../Hooks/Checkout/useCreditCardValidation';
import { formatCreditCardNumber } from '../../utils/checkout/formatCardNumber';
import { useCreateOrder } from '../../Hooks/Checkout/useCreateOrder';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const FormPayment = ({ state, setState }) => {

    const [showInfo, setShowInfo] = useState(false)
    const { onCheckout } = useCreateOrder()
    console.warn(state.user);

    const CARD_LENGTH = 16;
    const NAME_LENGTH = 2;

    const {
        validateCardNumber,
        validateCvc,
        validateExpiryDate,
        validationErrors,
        currentYear
    } = useCreditCardValidation()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        let formattedValue
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
        validateExpiryDate(state?.expiryMonth, state?.expiryYear);
        validateCardNumber(state.number)
        validateCvc(state.cvc);

        console.log(validateCardNumber(state.number));

        if (!validationErrors.cardNumberError && !validationErrors.expirationError && !validationErrors.cvcError) {
            onCheckout();
        } else {
            console.error('Error at handleSubmit');

        }


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
            class: ` relative ${validationErrors.cardNumberError ? 'inputError' : 'inputStyle'} w-2/3 md:w-full`,
            min: CARD_LENGTH
        },
        {
            name: 'name',
            placeholder: 'Your Name',
            type: 'text',
            value: state.name,
            class: 'inputStyle w-2/3 md:w-full',
            min: NAME_LENGTH

        },
    ]
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className=' flex flex-col items-center p-2 mt-4 gap-4 w-full'
            >
                <button
                    type='button'
                    onClick={() => setShowInfo(true)}
                    className='relative bg-sky-400 hover:bg-sky-600 hover:scale-110 px-2 rounded cursor-pointer font-semibold text-slate-100 transition-all duration-200'>
                    Try this !!
                    <p className='absolute top-0 right-0.5 bg-sky-500 px-2 rounded cursor-pointer animate-ping text-slate-100 opacity-20'>
                        Try this
                    </p>
                </button>

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
                                } else if (e.target.value.length > 22) {
                                    e.target.value = e.target.value.slice(0, 22);
                                }
                            }}
                            required
                            {...(data.type === 'text') ? { minLength: data.min } :
                                data.type === 'number' ? { min: data.min } : {}}
                        />
                    ))
                }

                <div
                    className='flex flex-col justify-between w-2/3 md:full'
                >


                    <section className='flex w-2/3 md:w-full items-center gap-x-3'>

                        <select
                            id='expiry'
                            className={`w-full text-center ${validationErrors.expirationError ? 'inputError ' : 'inputStyle'} `}
                            type='number'
                            name='expiryMonth'
                            placeholder='MM'
                            value={state.expiryMonth}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            required
                        >
                            <option value="">-</option>
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
                            className={`w-full text-center ${validationErrors.expirationError ? 'inputError ' : 'inputStyle'} `}
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
                    </section>

                    <input
                        className={`w-2/4 mt-2 mx-auto text-center ${validationErrors.cvcError ? 'inputError' : 'inputStyle'}  `}
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
            <Modal
                isOpen={showInfo}
                close={() => setShowInfo(false)}
            >
                <article className='text-left text-stone-600'>
                    <p className='text-black'>
                        The card design updates automatically based on the number entered, as long as it's a valid 16-digit number.
                    </p>
                    <ul className='my-2'>
                        <li> <span className='font-semibold text-sky-500'> MasterCard example: </span> <code>2222222222222222</code> (starts with 2 or 5 and has 16 digits).</li>
                        <li> <span className='font-semibold text-sky-500'> Visa example: </span> <code>4111111111111</code> or <code>4111111111111111</code> (starts with 4 and has 13 or 16 digits).</li>
                        <li> <span className='font-semibold text-sky-500'>Other numbers</span> will display a generic card design with no specific brand.</li>
                    </ul>
                </article>
            </Modal>
        </>
    )
}
