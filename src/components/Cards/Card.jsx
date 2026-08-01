import CardImage from './CardImage';
import CardInfo from './CardInfo';

function Card({image, name, category, price, addToCart}){
    return(
        <article className="w-100 flex flex-col justify-center items-center gap-6 p-4">
            <CardImage image={image} name={name} addToCart={addToCart}/>
            <CardInfo category={category} name={name} price={price}/>
        </article>
    )
}

export default Card;