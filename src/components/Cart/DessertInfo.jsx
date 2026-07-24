import removeItemIcon from '../../../public/assets/images/icon-remove-item.svg'

function DessertInfo({name, quantity, price}){
    return(
        <li className="w-full flex flex-col gap-2 relative pb-3 shadow-[0_2px_5px_-5px] shadow-Rose-900">
            <h3 className="text-sm text-Rose-900 font-semibold">{name}</h3>
            <div className="flex gap-2 items-center">
                <p className="text-sm text-Red font-bold">{quantity}x</p>
                <p className="text-Rose-400"><span className="text-xs">@</span> ${price.toFixed(2)}</p>
                <p className="text-Rose-500 font-semibold">${(quantity * price).toFixed(2)}</p>
            </div>
            <span className="absolute right-1 top-5 flex justify-center items-center w-4 h-4 rounded-full border-1 border-Rose-400">
                <img src={removeItemIcon} alt="" />
            </span>
        </li>
    )
}

export default DessertInfo;