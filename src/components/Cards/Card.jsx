import CardImage from './CardImage';
import CardInfo from './CardInfo';

function Card({image, name, category, price, addToCart, quantity, deleteFromCart}){
    return(
        <article className="max-w-70 flex flex-col rounded-lg justify-center items-center gap-6 p-4 md:max-w-60 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
            <CardImage image={image} name={name} addToCart={addToCart} quantity={quantity} deleteFromCart={deleteFromCart}/>
            <CardInfo category={category} name={name} price={price}/>
        </article>
    )
}

export default Card;