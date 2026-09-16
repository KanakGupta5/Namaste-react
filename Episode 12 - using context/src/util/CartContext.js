import { createContext } from "react";

const CartContext = createContext({
    cartItems: [],
    cartTotal: 0
});

export default CartContext;