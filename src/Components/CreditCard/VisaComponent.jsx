import  { useEffect, useState } from 'react'
import { CreditCardSignal } from '../../img/svg/CreditCardSignal'
import { VisaLogo } from '../../img/svg/VisaLogo'
import gruya1 from '../../img/gruya1.png'
import gruya2 from '../../img/gruya2.png'
import gruya3 from '../../img/gruya3.png'
import gruya4 from '../../img/gruya4.png'

export const VisaComponent = ({ maskCreditCardNumber, number, expiryMonth, expiryYear, name }) => {
 const images = [gruya1,gruya2,gruya3,gruya4];
 const [activeImg, setActiveImg] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setActiveImg((prevImg) => (prevImg + 1) % images.length);
  },4000)
  return () => clearInterval(interval)
 },[images.length])
 
  return (
    <section className='credit-card_front visaFront shadow-md shadow-black/60' aria-label="Credit Card Information">
      <div className=' relative  text-stone-800 col-start-1 h-full '>
        <span className="form form1 bg-stone-200/90"></span>
        <span className="form form2 bg-yellow-300/90"></span>
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
      <aside className='relative backdrop-blur-sm flex flex-col justify-between items-center p-2  col-start-2 w-full h-full'>
        <div className='pt-2'>
          <CreditCardSignal className=' rotate-90' />
        </div>
        <div className='absolute top-1/2 w-full'>

        {images.map((img, index) => (
          <img
          key={index}
          src={img}
          alt={`image${index + 1}`}
          className={`fade-image ${index === activeImg ? 'active' : ''}`}
          />
        ))}
        </div>
      </aside>
    </section>
  )
}
