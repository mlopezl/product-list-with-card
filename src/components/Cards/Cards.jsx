import Card from "./Card";
import CardsTitle from "./CardsTitle";
import data from '../../../data.json';

function Cards({addToCart, deleteFromCart, cart}){
    return(
        <main className="w-full max-w-200 min-h-screen flex flex-col justify-center items-center p-4 gap-4 pt-5 font-Redhat ">
            <CardsTitle/>
            <div className="max-w-180 flex flex-col items-center justify-center pt-4 gap-4 sm:flex-row sm:flex-wrap sm:max-w-250 sm:gap-2">
                {data.map((dessert) =>{
                const cartItem = cart.find(
        item => item.dessert.name === dessert.name
    );

                return <Card 
                key={dessert.name}
                image={dessert.image} 
                name={dessert.name} 
                category={dessert.category}
                price={dessert.price}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                quantity={cartItem?.quantity ?? 0}
                />
            })}
            </div>
        </main>
    )
}

export default Cards;