import CardButton from "./CardButton";
import QuantityButton from "./QuantityButton";


function CardImage({image, name, addToCart, quantity, deleteFromCart}){
    return(
        <div className="w-full relative">
            <picture>
            <source
                media="(min-width: 1024px)"
                srcSet={image.desktop}
            />

            <source
                media="(min-width: 768px)"
                srcSet={image.tablet}
            />

            <img
                className={`w-full rounded-lg ${
                    quantity ? "border-2 border-Red" : "border-none"
                }`}
                src={image.mobile}
                alt={name}
            />
        </picture>
            <CardButton quantity={quantity} addToCart={addToCart} name={name}/>
            <QuantityButton quantity={quantity} addToCart={addToCart} name={name} deleteFromCart={deleteFromCart}/>
        </div>
    )
}

export default CardImage;