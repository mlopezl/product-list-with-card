import CartTitle from "./CartTitle";
import CartEmpty from "./CartEmpty";
import DessertList from "./DessertList";
import CartTotal from "./CartTotal";
import CartMessage from "./CartMessage";
import CartButton from "./CartButton";

function Cart(){
    return(
        <section className="bg-Rose-50 w-70 min-h-65 p-4 rounded-lg mb-10 flex flex-col items-center gap-4">
            <CartTitle amount={0}/>
            {/* <CartEmpty/> */}
            <DessertList/>
            <CartTotal total={46.50}/>
            <CartMessage/>
            <CartButton/>
        </section>
    )
}

export default Cart;