function OrderButton({startNewOrder}){
    return(
        <button 
        onClick={()=> startNewOrder()}
        
        className="w-70 h-12 rounded-3xl bg-Red text-Rose-50">
            Start New Order
        </button>
    )
}

export default OrderButton;