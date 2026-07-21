import cartImage from '../../../public/assets/images/icon-add-to-cart.svg';

function CardButton(){
    return(
        <button className="absolute w-35 rounded-3xl -bottom-5 left-18 bg-Rose-50 flex justify-center items-center gap-2 p-2 border-1 border-Rose-500">
            <img src={cartImage} alt="" />
            <span className="text-xs font-semibold">Add to Cart</span>
        </button>
    )
}

export default CardButton;