// import data from '../../../data.json';
import Image from './Image';

function Card(){
    return(
        <article className="w-full flex flex-col justify-center items-center p-4">
            <Image image={"./assets/images/image-waffle-mobile.jpg"} name={"Waffle with Berries"}/>
        </article>
    )
}

export default Card;