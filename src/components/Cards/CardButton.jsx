import cartImage from '../../../public/assets/images/icon-add-to-cart.svg';

function CardButton({quantity, name, addToCart}){

    return(
        <button 
        onClick={() => addToCart(name)}
        className={`absolute w-35 h-10 rounded-3xl -bottom-5 left-18 
        bg-Rose-50 justify-center items-center 
        gap-2 p-3 border-1 border-Rose-500 z-2
        ${quantity ? "hidden" : "flex"}`}>
            <img src={cartImage} alt="" />
            <span className="text-xs font-semibold">Add to Cart</span>
        </button>
    )
}

export default CardButton;