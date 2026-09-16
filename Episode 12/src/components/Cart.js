import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {clearCart} from "../util/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    return <>
        <div className="flex flex-col w-1/3 mx-auto bg-white p-4 my-4 rounded-lg">
        <button className="bg-black text-white p-3 my-3" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            {cartItems.map((item) => (
                <React.Fragment key={item?.id} >
                    <div className="border-b border-gray-200">
                        <div className="flex justify-between">
                            <div>{item?.name}</div>
                            <div>{item?.count}</div>
                        </div>
                        <div className="text-right">
                            {item?.price}/-
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </>
}

export default Cart;