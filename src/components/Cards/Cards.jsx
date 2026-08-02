import Card from "./Card";
import CardsTitle from "./CardsTitle";
import data from '../../../data.json';

function Cards({addToCart, deleteFromCart, cart}){
    return(
        <main className="w-full min-h-screen flex flex-col items-center gap-4 pt-10 font-Redhat">
            <CardsTitle/>
            {data.map((dessert) =>{
                const cartItem = cart.find(
        item => item.dessert.name === dessert.name
    );

                return <Card 
                key={dessert.name}
                image={dessert.image.mobile} 
                name={dessert.name} 
                category={dessert.category}
                price={dessert.price}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                quantity={cartItem?.quantity ?? 0}
                />
            })}
        </main>
    )
}

export default Cards;