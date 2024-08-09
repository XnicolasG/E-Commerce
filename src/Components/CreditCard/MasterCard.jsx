
import { MasterCard } from '../../img/svg/MasterCard'
import { CreditCardSignal } from '../../img/svg/CreditCardSignal'

export const MasterCardComponent = ({maskCreditCardNumber,number, expiryMonth, expiryYear, name }) => {
  return (
    <section className='credit-card_front masterCardFront shadow-md shadow-black/60' aria-label="Credit Card Information">
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
                <aside className='masterCardBack flex flex-col justify-between items-center p-2  col-start-2 w-full h-full'>
                    <div className='pt-2'>
                        <CreditCardSignal  className=' rotate-90' />
                    </div>
                    <MasterCard className={`masterCardLogo size-10`} />
                </aside>
            </section>
  )
}
