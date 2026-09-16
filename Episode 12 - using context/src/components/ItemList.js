import { useContext, useState } from "react";
import CartContext from "../util/CartContext";

const ItemList = ({ itemData }) => {
    const {cartItems, setCartItems} = useContext(CartContext);

    const [count, setCount] = useState(0);

    

    function handleAddClick(itemDetails, count){
        let tempCartItems = [...cartItems];
        const cartItem = {
            name: itemDetails?.name,
            price: itemDetails?.price,
            count: count,
            id: itemDetails?.id
        }
        setCount(count);
        const cartHasItem = tempCartItems.findIndex(item => item.name == itemDetails.name);
        if(cartHasItem >= 0)
            count == 0 ? tempCartItems.splice(cartHasItem, 1) : tempCartItems[cartHasItem].count = count;
        else if(count != 0)
            tempCartItems.push(cartItem);
        setCartItems(tempCartItems);        
    }
    return <>
        <div className="flex justify-between my-4 px-2 border-b border-solid py-1 border-gray-300">
            <div className="flex flex-col w-9/12">
                <p className="font-medium text-md ">{itemData?.name}</p>
                <p className="font-medium text-md" >₹ {itemData?.price}</p>
                <p className="text-gray-600">{itemData?.description}</p>
            </div>
            <div className="w-3/12 relative">
                <img className="h-24 w-full object-cover rounded-md " src={itemData?.image}></img>
                {count == 0 && <button onClick={() => {
                    handleAddClick(itemData, count+1);
                }} className="absolute left-5 top-5/6 font-bold text-green-600 bg-white border border-solid border-gray-300 w-[70%] rounded-lg py-1">
                    ADD
                </button>}
                {count != 0 && <button className="absolute left-5 top-5/6 font-bold text-green-600 bg-white border border-solid border-gray-300 w-[70%] rounded-lg py-1">
                    <div className="flex justify-evenly">
                        <span className="hover:bg-gray-200" onClick={() => {
                            handleAddClick(itemData, count-1);
                        }}>
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                        </span>

                        {count}

                        <span className="hover:bg-gray-200" onClick={() => {
                            handleAddClick(itemData, count+1);
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        </span>
                    </div>
                </button>}
            </div>
        </div>
    </>
}

export default ItemList;