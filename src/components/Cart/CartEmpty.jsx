import emptyImage from "../../../public/assets/images/illustration-empty-cart.svg"

function CartEmpty(){
    return(
        <>
            <img className="w-30" src={emptyImage} alt="" />
            <p className="text-Rose-400 text-sm font-semibold">Your added items will appear here</p>
        </>
    )
}

export default CartEmpty;