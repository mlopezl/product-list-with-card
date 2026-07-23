import cartImage from '../../../public/assets/images/icon-add-to-cart.svg';

function CardButton({isClicked, isHidden}){

    return(
        <button 
        onClick={isHidden}
        className={`absolute w-35 h-10 rounded-3xl -bottom-5 left-18 
        bg-Rose-50 flex justify-center items-center 
        gap-2 p-3 border-1 border-Rose-500 z-2
        ${isClicked ? "hidden" : "flex"}`}>
            <img src={cartImage} alt="" />
            <span className="text-xs font-semibold">Add to Cart</span>
        </button>
    )
}

export default CardButton;