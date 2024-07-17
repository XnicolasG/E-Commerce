import React from 'react'
import { CreditCardSignal } from '../../img/svg/CreditCardSignal'
import { VisaLogo } from '../../img/svg/VisaLogo'
import cactus from '../../img/cactus.png'

export const VisaComponent = ({ maskCreditCardNumber, number, expiryMonth, expiryYear, name }) => {
  return (
    <section className='credit-card_front visaFront shadow-md shadow-black/60' aria-label="Credit Card Information">
      <div className=' relative  text-stone-800 col-start-1 h-full '>
        <span className="form form1 bg-rose-500/90"></span>
        <span className="form form2 bg-cyan-500/90"></span>
        <div className='backdrop-blur-sm flex flex-col justify-between p-3 w-full  h-full'>
          <VisaLogo className={`visaLogo size-12`} />
          <div>

            <p>{maskCreditCardNumber(number)}</p>
            <div className='flex'>
              <p>{!expiryMonth ? 'MM' : expiryMonth}</p>
              <p>/</p>
              <p>{!expiryYear ? 'AA' : expiryYear}</p>
            </div>
            <p className=''>{!name ? 'Your Name' : name}</p>
          </div>
        </div>
      </div>
      <aside className='backdrop-blur-sm flex flex-col justify-between items-center p-2  col-start-2 w-full h-full'>
        <div className='pt-2'>
          <CreditCardSignal className=' rotate-90' />
        </div>
        <img className='w-full' src={cactus} alt="cactus" />
      </aside>
    </section>
  )
}
{/* <aside className='backdrop-blur-md flex  justify-between items-center p-2  w-full h-full'>
  <div className='pt-2'>
  </div>
</aside>
<div className=' relative text-stone-800 border border-black w-full h-full '>
<span className="circle circle1 bg-red-600/90"></span>
<span className="circle circle2 bg-yellow-500/90"></span>
<div className='backdrop-blur-md flex flex-col justify-end p-3 w-full  h-full'>
</div>
</div> */}
