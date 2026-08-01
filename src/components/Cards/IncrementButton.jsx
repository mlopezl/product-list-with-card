import desserts from '../../../data.json'

function IncrementButton({increaseQuantity, addToCart, name}){
    const handleClick = () =>{
            increaseQuantity();
            addToCart(name);
        }
    return(
        <span
        onClick={handleClick}
        className="w-4 h-4 flex justify-center items-center rounded-full border-1 border-Rose-50">
                <img src="/assets/images/icon-increment-quantity.svg" alt="" />
        </span>
    )
}

export default IncrementButton;