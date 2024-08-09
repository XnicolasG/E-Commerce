import { CreditCardSignal } from '../../img/svg/CreditCardSignal'

export const DefaultComponent = ({ maskCreditCardNumber, number, expiryMonth, expiryYear, name }) => {
  return (
    <section className='credit-card_front defaultFront shadow-md shadow-black/60' aria-label="Credit Card Information">
      <div className=' relative w-full col-start-1 h-full '>
        <div className='p-3 flex justify-end'>
          <CreditCardSignal className=' rotate-90' color='#fff'  />
        </div>
      </div>
      <aside className='defaultBack flex flex-col justify-between items-center text-lg text-stone-100 p-2  col-start-2 w-full h-full'>
        <div className='backdrop-blur-xs flex flex-col justify-end p-3 w-full  h-full'>
          <div className='flex justify-between'>
            <p>{maskCreditCardNumber(number)}</p>
            <div className='flex'>
              <p>{!expiryMonth ? 'MM' : expiryMonth}</p>
              <p>/</p>
              <p>{!expiryYear ? 'AA' : expiryYear}</p>
            </div>
          </div>
          <p className=''>{!name ? 'Your Name' : name}</p>
        </div>
      </aside>
    </section>
  )
}
