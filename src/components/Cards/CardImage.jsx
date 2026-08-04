import { useState } from 'react';
import CardButton from "./CardButton";
import QuantityButton from "./QuantityButton";


function CardImage({image, name, addToCart, quantity, deleteFromCart}){
    return(
        <div className="w-full relative">
            <img className={`w-full rounded-lg
                ${quantity ? "border-2 border-Red" : "boder-none"}`} src={image} alt={name} />
            <CardButton quantity={quantity} addToCart={addToCart} name={name}/>
            <QuantityButton quantity={quantity} addToCart={addToCart} name={name} deleteFromCart={deleteFromCart}/>
        </div>
    )
}

export default CardImage;