import Icon from '../../../public/assets/images/icon-decrement-quantity.svg?react'

function DecrementButton({deleteFromCart, name}){
    return(
         <span
         onClick={() => deleteFromCart(name)}
         className="group w-4 h-4 flex justify-center items-center rounded-full border-1 border-Rose-50 hover:bg-Rose-50 hover:text-Red hover:scale-110 transition duration-200 ease-out">
                <Icon/>
         </span>
    )
}

export default DecrementButton;