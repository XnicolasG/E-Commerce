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
        <>
            {/* <article className='w-full mt-20 text-pretty'>
                <p>
                    El diseño de la tarjeta cambia automáticamente según el número ingresado, siempre que sea un número válido de 13 o 16 dígitos. Si el número no coincide con los patrones conocidos, se muestra un diseño por defecto.
                </p>
                <ul>
                    <li>Ejemplo MasterCard: <code>2222222222222222</code> (inicia con 2 o 5 y tiene 16 dígitos).</li>
                    <li>Ejemplo Visa: <code>4111111111111</code> o <code>4111111111111111</code> (inicia con 4 y tiene 13 o 16 dígitos).</li>
                    <li>Otros números mostrarán una tarjeta genérica sin marca específica.</li>
                </ul>
            </article> */}
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
        </>
    )
}

export default Checkout
