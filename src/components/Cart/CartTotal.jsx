function CartTotal({calculateTotal}){
    const total = calculateTotal();

    return(
        <div className="w-full pl-5 pr-5 h-10 flex justify-between items-center">
            <p className="text-sm text-Rose-900">Order Total</p>
            <p className="text-xl text-Rose-900 font-bold ">${total.toFixed(2)}</p>
        </div>
    )
}

export default CartTotal;