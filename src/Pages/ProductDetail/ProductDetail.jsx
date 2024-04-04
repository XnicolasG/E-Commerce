import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../../Context/ContextProvider';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'


const ProductDetail = () => {
    const { state,onAddToCart } = useContext(CartContext)
    const { id:prodId } = useParams();
    const productId = parseInt(prodId)
    const product = state.items?.find(item => item.id === productId);
    const { id, price, image, title, category, description, rating: { rate, count }, } = product
    console.log(product);
    const navigate = useNavigate()
    const handleClick = () =>{
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
                <div className='w-full md:w-1/2  p-2 relative'>
                    <h1 className='text-xl font-semibold tracking-wide '>{title}</h1>

                    <p className='text-green-500 text-lg font-semibold mt-4 '>${price}  <span className='ml-2 font-normal line-through text-black'>${Math.floor(price * .20 + price)}</span></p>
                    <div className='my-4 flex items-center gap-4 '>
                        <p className='bg-red-500 p-1 rounded-md text-white '>Hot Sale</p> <p className='font-semibold '>20% Off this week</p>
                    </div>
                    <p>{description}</p>
                    <p className='mt-4'> ⭐<span className='font-semibold'>{rate}/5 </span> based on <span className='font-semibold'>{count}</span> ratings</p>
                    <p className='my-4'>Availability: <span className='font-semibold'>In Stock</span></p>
                    <button
                        onClick={cartAdd}
                        className='flex w-1/2 justify-center gap-2 items-center mx-auto p-1 px-2 rounded-md bg-blue-600 text-white hover:bg-blue-800 transition-all '
                        type='button'>Add to cart
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                    </button>
                </div>
            </main>
        </section>
    )
}

export default ProductDetail