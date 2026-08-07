import CartTitle from "./CartTitle";
import CartEmpty from "./CartEmpty";
import DessertList from "./DessertList";
import CartTotal from "./CartTotal";
import CartMessage from "./CartMessage";
import CartButton from "./CartButton";
import { AnimatePresence, motion } from "motion/react";

function Cart({ cart, isCompleted, calculateTotal, deleteElementFromCart }) {
  const amount = cart.reduce((total, dessert) => {
  return total + dessert.quantity;
}, 0);

  return (
    <section className="bg-Rose-50 w-70 min-h-68 p-4 rounded-lg mb-10 flex flex-col items-center gap-4 sm:m-12 sm:w-80">
      <CartTitle amount={amount} />
      <AnimatePresence mode="wait">
      {amount ? 
      <motion.div
                        key="filled-cart"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                        }}
                        className="w-full flex flex-col items-center gap-4"
                    >
        <>
          <DessertList cart={cart} deleteElementFromCart={deleteElementFromCart}/>
          <CartTotal calculateTotal={calculateTotal}/>
          <CartMessage />
          <CartButton isCompleted={isCompleted} />
        </>
        </motion.div>
      : (
        <CartEmpty />
      )}
      </AnimatePresence>
    </section>
  );
}

export default Cart;
