import { useContext } from 'react'
import '../../App.css'
import { CartContext } from '../../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { totalPrice } from '../../utils/reducer'
import { ProductQuantity } from '../CartDetail/ProductQuantity'

const Card = ({ id, price, image, title, category }) => {
    const { updateState, onAddToCart, state } = useContext(CartContext)
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate(`/ProductDetail/${id}`)
    }
    let quantity = state.cartProducts.find((prod)=>prod.title === title)?.quantity || 0


    const cartAdd = () => {
        onAddToCart({ id, price, image, title, category, });
        const newTotal = totalPrice(state.cartProducts)
        updateState({
            totalAmount: newTotal
        });
    };
    return (
        <div
            className='flex flex-col cursor-pointer rounded-md shadow-md shadow-black w-56 h-72 overflow-hidden bg-white m-6'>
            <figure
                onClick={HandleClick}
                className='bg-transparent relative my-2 w-full h-full overflow-hidden'
            >
                <span className='absolute bottom-0 m-1 px-2 rounded-md text-white bg-black/70 z-20'>{category}</span>
                <img
                    className='w-full h-full object-contain hover:transform hover:scale-110 hover:rotate-3 transition-transform duration-200 '
                    src={image} alt="controller" />
            </figure>
            <section className='flex flex-col  text-white rounded-t-xl justify-center px-4 bg-black h-1/2'>
                <div className='flex justify-between mb-2'>

                    <p className='title h-20 overflow-auto p-1 text-pretty'>{title}</p>
                    <p className='text-lg font-semibold'>${price}</p>
                </div>
                <div className='flex flex-col w-full  overflow-hidden h-12 '>
                    <button
                        onClick={cartAdd}
                        className={` ${quantity >= 1 && '-translate-y-10 ' } p-1 my-2 text-white bg-blue-600 rounded-md  hover:bg-blue-700 transition-all duration-200`}
                        type='button'>
                        Add to cart
                    </button>
                    <ProductQuantity
                        id={id}
                        quantity={quantity}
                        styles={`${quantity >= 1 && '-translate-y-10 '} flex justify-center bg-white text-black  transition-all duration-200`}
                    />
                </div>
            </section>
        </div>
    )
}

export default Card