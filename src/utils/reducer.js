//products will be cartProducts array
export const totalPrice = (products) =>{
    let sum = 0 ;
    products.forEach(prod => sum += prod.price * prod.quantity)
    return sum 
}