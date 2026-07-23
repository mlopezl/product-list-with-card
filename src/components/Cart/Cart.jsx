import CartTitle from "./CartTitle";
import CartEmpty from "./CartEmpty";

function Cart(){
    return(
        <section className="bg-Rose-50 w-70 h-65 p-4 rounded-lg mb-10 flex flex-col items-center gap-4">
            <CartTitle amount={0}/>
            <CartEmpty/>
        </section>
    )
}

export default Cart;