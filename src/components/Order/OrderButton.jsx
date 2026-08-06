function OrderButton({startNewOrder}){
    return(
        <button 
        onClick={()=> startNewOrder()}
        
        className="w-full h-12 rounded-3xl bg-Red text-Rose-50 hover:brightness-90 transition duration-300">
            Start New Order
        </button>
    )
}

export default OrderButton;