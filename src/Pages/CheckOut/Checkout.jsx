import { useState } from 'react'
import { CreditCard } from '../../Components/CreditCard/CreditCard';
import { FormPayment } from '../../Components/Checkout/FormPayment';
import { CartResume } from '../../Components/Checkout/CartResume';

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
            className=' flex flex-col md:flex-row-reverse items-center sm:justify-between  py-4 m-20 mx-auto w-[90%] md:w-[80%] '
        >
            <div>
                <CreditCard
                    className=' '
                    number={state?.number}
                    expiryMonth={state.expiryMonth}
                    expiryYear={state.expiryYear}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
                <FormPayment state={state} setState={setState} />
            </div>
            <CartResume />
        </section>
    )
}

export default Checkout
