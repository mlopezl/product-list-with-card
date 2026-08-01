function CartButton({isCompleted}){
    return(
        <button
        onClick={() => isCompleted()}
        className="w-60 h-12 rounded-3xl bg-Red text-Rose-50">
            Confirm Order
        </button>
    )
}

export default CartButton;