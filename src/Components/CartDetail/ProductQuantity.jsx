import { Decrease } from "../../img/svg/Decrease";
import { Increase } from "../../img/svg/Increase";
import useCartActions from "../../Hooks/Cart/useCartActions";


export const ProductQuantity = ({ styles, id, quantity }) => {
    const {  onIncrease, onDecrease } = useCartActions(id)
    
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
