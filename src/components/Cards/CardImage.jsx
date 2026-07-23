import { useState } from 'react';
import CardButton from "./CardButton";
import QuantityButton from "./QuantityButton";


function CardImage({image, imageName}){
    const [isClicked, setIsClicked] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        setIsClicked(true);
        setQuantity(1);
    };

    const addQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const subtractQuantity = () => {
        setQuantity(prev => {
            const newQuantity = prev - 1;

            if (newQuantity === 0) {
                setIsClicked(false);
            }

            return newQuantity;
        });
    };


    return(
        <div className="w-70 relative">
            <img className={`w-full rounded-lg
                ${isClicked ? "border-2 border-Red" : "boder-none"}`} src={image} alt={imageName} />
            <CardButton isClicked={isClicked} isHidden={addToCart}/>
            <QuantityButton quantity={quantity} addQuantity={addQuantity} subtractQuantity={subtractQuantity}/>
        </div>
    )
}

export default CardImage;