import CartContext from "../util/CartContext";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";

const CartList = () => {
    const { cartItems } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const sum = cartItems.reduce((acc, res) => {
            acc += res?.count * res?.price;
            return acc;
        }, 0)
        setCartTotal(sum);
    }, [cartItems]);

    return <>
        <div className="absolute top-14 p-4 min-w-65 bg-gray-100 border border-gray-200 rounded-lg">
            {cartItems.map(item => <CartItem key={item?.id} data={item} />)}
            {cartItems.length > 0 && <div className="flex justify-between">
                <div>Total : </div>
                <div>{cartTotal}/-</div>
            </div>}
        </div>

    </>
}

export default CartList;