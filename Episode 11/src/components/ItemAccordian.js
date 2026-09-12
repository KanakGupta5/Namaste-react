import { useState } from "react";
import ItemList from "./ItemList";

const ItemAccordian = ({ data, showItemList, accordianHandler }) => { //Pass the state and event handler from parent
    // const [showItemList, setShowItemList] = useState(false); Remove the state from child component
    return <>
        <div className="flex flex-col">
            <div className="flex justify-between cursor-pointer shadow-xl py-1.5 px-2 rounded-lg border-gray-200 border-solid border" onClick={
                accordianHandler
            }>
                <p className="font-semibold text-md">{data?.title} ({data?.items.length})</p>
                {!showItemList ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                }
            </div>
            {showItemList && data?.items.map(item => {
                return <ItemList key={item?.id} itemData={item} />
            })}

        </div>
    </>
}

export default ItemAccordian;