function DecrementButton({decrementQuantity}){
    return(
         <span
         onClick={decrementQuantity}
         className="w-4 h-4 flex justify-center items-center rounded-full border-1 border-Rose-50">
                <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
         </span>
    )
}

export default DecrementButton;