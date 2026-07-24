function CartTotal({total}){
    return(
        <div className="w-60 h-10 flex justify-between items-center">
            <p className="text-sm text-Rose-900">Order Total</p>
            <p className="text-xl text-Rose-900 font-bold ">${total.toFixed(2)}</p>
        </div>
    )
}

export default CartTotal;