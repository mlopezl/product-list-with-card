import CartTitle from "./CartTitle";
import CartEmpty from "./CartEmpty";
import DessertList from "./DessertList";
import CartTotal from "./CartTotal";
import CartMessage from "./CartMessage";
import CartButton from "./CartButton";
import { useState, useEffect } from "react";

function Cart({ cart, isCompleted }) {
  const [amount, setAmount] = useState(0);

  const calculateAmount = () => {
    return cart.reduce((amount, dessert) => {
      return (amount += dessert.quantity);
    }, 0);
  };

  const calculateTotal = () =>{
    return cart.reduce((total, dessert) =>{
        return total += dessert.quantity * dessert.dessert.price;
    }, 0)
  }

  useEffect(() => {
    const newAmount = calculateAmount();
    setAmount(newAmount);
  }, [amount]);

  return (
    <section className="bg-Rose-50 w-70 min-h-65 p-4 rounded-lg mb-10 flex flex-col items-center gap-4">
      <CartTitle amount={calculateAmount()} />
      {amount ? 
        <>
          <DessertList cart={cart}/>
          <CartTotal total={calculateTotal()}/>
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
