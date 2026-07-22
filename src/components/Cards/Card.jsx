import Image from './Image';
import CardInfo from './CardInfo';

function Card({image, name, category, price}){
    return(
        <article className="w-full flex flex-col justify-center gap-4 items-center p-4">
            <Image image={image} name={name}/>
            <CardInfo category={category} name={name} price={price}/>
        </article>
    )
}

export default Card;