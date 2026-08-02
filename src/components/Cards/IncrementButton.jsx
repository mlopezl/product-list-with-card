import desserts from '../../../data.json'

function IncrementButton({addToCart, name}){
    
    return(
        <span
        onClick={() => addToCart(name)}
        className="w-4 h-4 flex justify-center items-center rounded-full border-1 border-Rose-50">
                <img src="/assets/images/icon-increment-quantity.svg" alt="" />
        </span>
    )
}

export default IncrementButton;