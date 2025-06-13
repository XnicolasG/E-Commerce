import { useContext } from "react"
import { CartContext } from "../../Context/ContextProvider"
import { useCreateOrder } from "../../Hooks/Checkout/useCreateOrder"


export const CartResume = () => {
    const { state } = useContext(CartContext)
    const {formattedTotal} = useCreateOrder()
    return (
        <section className="w-1/2 p-4 border-t border-gray-500 ">
            <div className="flex justify-around mb-2 text-gray-700 font-semibold">
                <p>Total products: {state.count}</p>
                <p>Total to pay: ${formattedTotal} </p>
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
    )
}
