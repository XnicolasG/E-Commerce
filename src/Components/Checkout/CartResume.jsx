import { useContext, useState } from "react"
import { CartContext } from "../../Context/ContextProvider"
import { useCreateOrder } from "../../Hooks/Checkout/useCreateOrder"
import { Trash } from '../../img/svg/Trash'
import { useNavigate } from "react-router-dom"
import { Modal } from "../Modal/Modal"


export const CartResume = () => {
    const [showConfirm, setShowConfirm] = useState(false)
    const { state, updateState } = useContext(CartContext)
    const { formattedTotal } = useCreateOrder()
    const navigate = useNavigate()

    const handleEmpty = () => {
        updateState({
            cartProducts: [],
            count: 0,
            totalAmount: 0
        })
        navigate("/")
    }
    return (
        <>
            <section className="w-1/2 p-4 border-t border-gray-500 ">
                <div className="flex justify-around items-center mb-2 text-gray-700 font-semibold">
                    <p>Total products: {state.count}</p>
                    <p>Total to pay: ${formattedTotal} </p>
                    <button
                        onClick={() => setShowConfirm(true)}
                        className="flex items-center gap-x-1  hover:text-red-500 transition-all duration-200"
                    >
                        Empty
                        <Trash />
                    </button>
                </div>
                <ul className="space-y-4">
                    {state.cartProducts.map((product, index) => (
                        <li
                            className="flex items-center bg-white shadow-md rounded-lg overflow-hidden"
                            key={index}
                        >
                            <div className="w-1/3 p-2">
                                <img
                                    className="w-full h-32 object-contain"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </div>
                            <div className="w-2/3 p-2">
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <p className="text-gray-500">Quantity: {product.quantity}</p>
                                <p className="text-gray-500">Price: ${product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <Modal
                isOpen={showConfirm}
                onCancel={()=> setShowConfirm(false)}
                onConfirm={handleEmpty}
            >
                <h2 className="text-lg font-bold text-gray-800">Are you sure you want to empty the cart?</h2>
            </Modal>
        </>
    )
}
