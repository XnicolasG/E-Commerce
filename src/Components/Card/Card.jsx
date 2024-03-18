import React, { useContext } from 'react'
import '../../App.css'
import { CartContext } from '../../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, price, image, title, category,}) => {

    const { updateState, state } = useContext(CartContext)
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate(`/ProductDetail/${id}`)
    }
    // functión that cath the products to send it to cartProducts state with the quantity of each one
    const catchProduct = () => {
        // evaluate de index by the id
        const productIndex = state.cartProducts.findIndex((product) => product.id === id);
    
        // if the idex doesn't exist...
        if (productIndex === -1) {
          updateState({
            cartProducts: [
              ...state.cartProducts,
              { id, price, image, title, category, quantity: 1 }
            ]
          });
        //   if alredy exist
        }else{
            const updatedCartProduct = [...state.cartProducts];
            // it will update the quantity always + 1 if the product alredy exist
            updatedCartProduct[productIndex].quantity++;
            // the state will ne updated with the new quantity
            updateState({cartProducts: updatedCartProduct});
        }
        console.log(state.cartProducts);
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
                <button
                    onClick={() => {updateState({
                        count: state.count + 1
                    })
                    catchProduct()}}
                    className='p-1 my-2 w-22 text-white bg-blue-600 rounded-md  hover:bg-blue-700 transition-all duration-200'
                    type='button'>Add to cart</button>
            </section>
        </div>
    )
}

export default Card