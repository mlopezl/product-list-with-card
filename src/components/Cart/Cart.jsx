import CartTitle from "./CartTitle";
import CartEmpty from "./CartEmpty";
import DessertList from "./DessertList";
import CartTotal from "./CartTotal";
import CartMessage from "./CartMessage";
import CartButton from "./CartButton";
import { useState, useEffect } from "react";

function Cart({ cart }) {
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
      {amount ? (
        cart.map((item) => {
          return (
            <div
              className="flex flex-col gap-4 items-center"
              key={item.dessert.name}
            >
              <DessertList name={item.dessert.name} quantity={item.quantity} price={item.dessert.price} />
            </div>
          );
        })
      ) : (
        <CartEmpty />
      )}
      {amount ? (
        <>
          <CartTotal total={calculateTotal()} />
          <CartMessage />
          <CartButton />
        </>
      ) : null}
    </section>
  );
}

export default Cart;
