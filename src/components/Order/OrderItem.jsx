function OrderItem({itemImage, itemName, itemQuantity, itemPrice}){
    return(
        <li className="flex gap-6 items-center pb-2 shadow-[0_2px_5px_-5px] shadow-Rose-900">
            <img className="w-10 rounded-sm" src={itemImage} alt="" />
            <div className="flex flex-col gap-1">
                <h3 className="text-sm text-Rose-900 font-semibold ">{itemName}</h3>
                <div className="flex gap-2 items-center">
                    <p className="text-Red text-sm">{itemQuantity}x</p>
                    <p className="text-Rose-400 text-sm">@ ${itemPrice.toFixed(2)}</p>
                </div>
            </div>
            <p className="text-Rose-900 font-medium">${(itemQuantity * itemPrice).toFixed(2)}</p>
        </li>
    )
}

export default OrderItem;