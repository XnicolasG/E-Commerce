import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../../Context/ContextProvider';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { CartIcon } from '../../img/svg/CartIcon';
import { ProductQuantity } from '../../Components/CartDetail/ProductQuantity';


const ProductDetail = () => {
    const { state, onAddToCart } = useContext(CartContext)
    const { id: prodId } = useParams();
    const productId = parseInt(prodId)
    const product = state.items?.find(item => item.id === productId);
    const { id, price, image, title, category, description, rating: { rate, count }, } = product
    let quantity = state.cartProducts.find((prod) => prod.title === title)?.quantity || 0

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1);
    }
    const cartAdd = () => {
        onAddToCart({ id, price, image, title, category });
    };

    return (
        <section className='flex flex-col mx-auto w-9/12 border-4 rounded-lg  mt-20 p-4 pb-8'>
            <div className='w-full'>
                <button type='button' onClick={handleClick} >
                    <ArrowLeftIcon className='w-6 h-6 text-black border-2 b rounded-full border-transparent hover:bg-black hover:text-white transition-all'></ArrowLeftIcon>
                </button>
                <p className=' '>
                    Home {'>'} {category}
                </p>
            </div>
            <main className='mt-4 flex flex-col mx-auto justify-center items-center sm:justify-around  md:flex-row gap-4'>
                <div className='w-full p-2 bg-white md:w-1/3 flex justify-center items-center overflow-hidden border-4 rounded-lg shadow-lg shadow-black/50 '>
                    <img src={image} alt={title} />
                </div>
                <article className='flex flex-col w-full md:w-1/2  p-2 relative'>
                    <h1 className='text-xl font-semibold tracking-wide '>{title}</h1>

                    <p className='text-green-500 text-lg font-semibold mt-4 '>${price}  <span className='ml-2 font-normal line-through text-black'>${Math.floor(price * .20 + price)}</span></p>
                    <div className='my-4 flex items-center gap-4 '>
                        <p className='bg-red-500 p-1 rounded-md text-white '>Hot Sale</p> <p className='font-semibold '>20% Off this week</p>
                    </div>
                    <p>{description}</p>
                    <p className='mt-4'> ⭐<span className='font-semibold'>{rate}/5 </span> based on <span className='font-semibold'>{count}</span> ratings</p>
                    <p className='my-4'>Availability: <span className='font-semibold'>In Stock</span></p>
                    <div className='flex flex-col mx-auto w-1/2 mt-6 overflow-hidden h-12 '>
                        <button
                            onClick={cartAdd}
                            className={` ${quantity >= 1 && '-translate-y-10 '} flex justify-center p-1 my-2 text-white bg-blue-600 rounded-md  hover:bg-blue-700 transition-all duration-200`}
                            type='button'>Add to cart
                            <CartIcon />
                        </button>
                        <ProductQuantity
                            id={id}
                            quantity={quantity}
                            styles={`${quantity >= 1 && '-translate-y-10 '}  flex justify-center bg-white text-black  transition-all duration-200`}
                        />
                    </div>
                </article>
            </main>
        </section>
    )
}

export default ProductDetail