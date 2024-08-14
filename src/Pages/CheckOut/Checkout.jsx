import { useState } from 'react'
import { CreditCard } from '../../Components/CreditCard/CreditCard';
import { FormPayment } from '../../Components/Checkout/FormPayment';

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
    return (
        <section
            className=' flex flex-col items-center py-4 m-20 mx-auto w-[90%] md:w-[80%] lg:w-[70%] '
        >
            <CreditCard
                className=' '
                number={state.number}
                expiryMonth={state.expiryMonth}
                expiryYear={state.expiryYear}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <FormPayment state={state} setState={setState} />
        </section>
    )
}

export default Checkout
