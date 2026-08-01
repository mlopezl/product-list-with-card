import Card from "./Card";
import CardsTitle from "./CardsTitle";
import data from '../../../data.json';

function Cards({addToCart}){
    return(
        <main className="w-full min-h-screen flex flex-col items-center gap-4 pt-10 font-Redhat">
            <CardsTitle/>
            {data.map((dessert) =>{
                return <Card 
                key={dessert.name}
                image={dessert.image.mobile} 
                name={dessert.name} 
                category={dessert.category}
                price={dessert.price}
                addToCart={addToCart}/>
            })}
        </main>
    )
}

export default Cards;