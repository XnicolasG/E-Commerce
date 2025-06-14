import { useContext } from "react";
import { CartContext } from "../../Context/ContextProvider";


const useCartActions = (id) => {
    const { state, updateState } = useContext(CartContext);

    const handleDelete = () => {
        const filteredProducts = state.cartProducts.filter(prod => prod.id !== id);
        const findProduct = state.cartProducts.find(prod => prod.id === id);

        if (!findProduct) return;
        
        const newCount = state.count - findProduct.quantity;
        updateState({
            count: Math.max(newCount, 0), 
            cartProducts: filteredProducts,
        });
    };

    const onIncrease = () => {
        const increaseQuantity = state.cartProducts.map(prod =>
            prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );

        updateState({
            count: state.count + 1,
            cartProducts: increaseQuantity,
        });
    };

    const onDecrease = () => {
        const updatedProducts = state.cartProducts.map(prod => {
            if (prod.id === id) {
                if (prod.quantity === 1) {
                    handleDelete();
                    return null;
                } else {
                    return { ...prod, quantity: prod.quantity - 1 };
                }
            }
            return prod;
        }).filter(Boolean);

        updateState({
            count: state.count - 1,
            cartProducts: updatedProducts,
        });
    };

    return { handleDelete, onIncrease, onDecrease };
};

export default useCartActions;
