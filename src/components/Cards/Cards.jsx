import Card from "./Card";
import CardsTitle from "./CardsTitle";

function Cards(){
    return(
        <main className="w-full min-h-screen bg-Rose-100 flex flex-col items-center gap-4 pt-10 font-Redhat">
            <CardsTitle/>
            <Card/>
        </main>
    )
}

export default Cards;