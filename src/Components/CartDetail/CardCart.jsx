import '../../App.css'
import { ProductQuantity } from './ProductQuantity'
import useCartActions from '../../Hooks/Cart/useCartActions'
import { Trash } from '../../img/svg/Trash'

const CardCart = ({ id, price, image, title, quantity }) => {

    const { handleDelete } = useCartActions(id)

    return (
        <section className='mx-auto my-2 flex flex-col justify-center items-center w-[90%] md:w-[70%] text-white '>
            <main className='flex flex-col py-4 items-center gap-x-4 w-[90%] md:w-80 bg-stone-200 text-black rounded-lg overflow-hidden'>
                <figure className='flex justify-center items-center w-40 max-h-44 rounded-sm overflow-hidden'>
                    <img className='cartCard__img ' src={image} alt="product" />
                </figure>
                <section className='flex flex-col text-pretty w-full py-2 px-4'>
                    <p className='title max-h-20 overflow-auto '>{title}</p>
                    <article className='flex w-full justify-around items-center bg-black text-stone-200 '>
                        <p className='font-semibold text-lg'>$ {(price * quantity).toFixed(2)}</p>
                        <ProductQuantity
                            id={id}
                            quantity={quantity}
                            handleDelete={handleDelete}
                            styles='flex gap-x-1 justify-around  items-center rounded-md overflow-hidden w-24 '
                        />
                        <div>
                            <p className='flex items-center hover:text-red-500 cursor-pointer transition-all duration-200 '>
                                <button
                                    onClick={handleDelete}
                                    type='button'>
                                    <Trash />
                                </button>
                            </p>
                        </div>
                    </article>
                </section>
            </main >
        </section >
    )
}

export default CardCart