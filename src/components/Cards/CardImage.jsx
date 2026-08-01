import { useState } from 'react';
import CardButton from "./CardButton";
import QuantityButton from "./QuantityButton";


function CardImage({image, name, addToCart}){
    const [isClicked, setIsClicked] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
    setIsClicked(true);
    setQuantity(1);
    addToCart(name);
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
                ${isClicked ? "border-2 border-Red" : "boder-none"}`} src={image} alt={name} />
            <CardButton isClicked={isClicked} isHidden={handleAdd}/>
            <QuantityButton quantity={quantity} addQuantity={addQuantity} subtractQuantity={subtractQuantity} addToCart={addToCart} name={name}/>
        </div>
    )
}

export default CardImage;