import CardImage from './CardImage';
import CardInfo from './CardInfo';

function Card({image, name, category, price, addToCart, quantity, deleteFromCart}){
    return(
        <article className="w-100 flex flex-col justify-center items-center gap-6 p-4">
            <CardImage image={image} name={name} addToCart={addToCart} quantity={quantity} deleteFromCart={deleteFromCart}/>
            <CardInfo category={category} name={name} price={price}/>
        </article>
    )
}

export default Card;