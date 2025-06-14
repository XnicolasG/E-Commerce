import { useContext } from "react";
import { CartContext } from "../../Context/ContextProvider";
import { Decrease } from "../../img/svg/Decrease";
import { Increase } from "../../img/svg/Increase";


export const ProductQuantity = ({ styles, id, quantity, handleDelete }) => {
    const { state, updateState } = useContext(CartContext)
    const onIncrease = () => {
        const increaseQuantity = state.cartProducts.map(prod => {
            if (prod.id === id) {
                return { ...prod, quantity: prod.quantity + 1 }
            } else {
                return prod
            }
        });
        updateState({
            count: state.count + 1,
            cartProducts: increaseQuantity,
        })
    }

    const onDecrease = () => {
        const increaseQuantity = state.cartProducts.map(prod => {
            if (prod.id === id) {
                if (prod.quantity === 1) {
                    handleDelete();
                    return null
                } else {
                    console.log(prod.price);
                    return { ...prod, quantity: prod.quantity - 1 }
                }
            } else {
                return prod
            }
        }).filter(Boolean)
        updateState({
            count: state.count - 1,
            cartProducts: increaseQuantity,
        })
    }
    return (
        <section className={`${styles}`}>
            <button
                onClick={onDecrease}
                className='  font-bold text-center transition-all hover:text-rose-500'>
                <Decrease />
            </button>
            <span className='mx-2 text-lg font-semibold'>
                {quantity}
            </span>
            <button
                onClick={onIncrease}
                className=' text-md font-bold text-center transition-all hover:text-blue-600'>
                <Increase />
            </button>
        </section>
    )
}
