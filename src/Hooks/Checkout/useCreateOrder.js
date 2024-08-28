import { useNavigate } from "react-router-dom";
import { totalPrice } from "../../utils/reducer";
import { useContext } from "react";
import { CartContext } from "../../Context/ContextProvider";


export const useCreateOrder = () => {
    const { state, updateState } = useContext(CartContext)
    let date = Date.now()
    const navigate = useNavigate();
    const totalPriceString = totalPrice(state.cartProducts);
    const totalPriceNumber = parseFloat(totalPriceString);
    const formattedTotal = totalPriceNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const onCheckout = () => {
            const today = new Date(date)
            const formattedDate = today.toString().slice(0, 24)

            const orderToAdd = {
                id: formattedDate,
                products: state.cartProducts,
                totalAmount: formattedTotal,
                totalProducts: state.count,
            }

            updateState({
                Order: [...state.Order, orderToAdd],
                cartProducts: [],
                count: 0,
            })
            navigate('/MyOrder')
    }
    return {formattedTotal,onCheckout}
}
