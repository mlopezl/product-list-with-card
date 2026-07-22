import Card from "./Card";
import CardsTitle from "./CardsTitle";
import data from '../../../data.json';

console.log(data);

function Cards(){
    return(
        <main className="w-full min-h-screen bg-Rose-100 flex flex-col items-center gap-4 pt-10 font-Redhat">
            <CardsTitle/>
            {data.map((dessert) =>{
                return <Card 
                key={dessert.name}
                image={dessert.image.mobile} 
                name={dessert.name} 
                category={dessert.category}
                price={dessert.price}/>
            })}
        </main>
    )
}

export default Cards;