import CartTitle from "./CartTitle";
import CartEmpty from "./CartEmpty";
import DessertList from "./DessertList";
import CartTotal from "./CartTotal";
import CartMessage from "./CartMessage";
import CartButton from "./CartButton";

function Cart({ cart, isCompleted, calculateTotal }) {
  const amount = cart.reduce((total, dessert) => {
  return total + dessert.quantity;
}, 0);

  return (
    <section className="bg-Rose-50 w-70 min-h-65 p-4 rounded-lg mb-10 flex flex-col items-center gap-4 lg:m-12 lg:w-80">
      <CartTitle amount={amount} />
      {amount ? 
        <>
          <DessertList cart={cart}/>
          <CartTotal calculateTotal={calculateTotal}/>
          <CartMessage />
          <CartButton isCompleted={isCompleted} />
        </>
      : (
        <CartEmpty />
      )}
    </section>
  );
}

export default Cart;
