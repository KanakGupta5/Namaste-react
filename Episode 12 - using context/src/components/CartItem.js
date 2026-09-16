const CartItem = ({ data }) => {
    console.log("bcjsd", data);
    return <>
        <div className="flex flex-col py-3 border-b border-gray-200">
            <div className="flex justify-between">
                <p>{data?.name}</p>
                <p>{data?.count}</p>
            </div>
            <p className="text-right">{data?.price}/-</p>
        </div>
    </>
}

export default CartItem;