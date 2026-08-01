import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderButton from "./OrderButton";
import CartTotal from "../Cart/CartTotal";

function Order({ cart, startNewOrder }) {
  const calculateTotal = () => {
    return cart.reduce((total, dessert) => {
      return (total += dessert.quantity * dessert.dessert.price);
    }, 0);
  };
  return (
    <section className="max-w-80 h-150 flex flex-col items-center gap-4 p-6 rounded-2xl bg-Rose-50 ">
      <OrderHeader />
      <OrderItems cart={cart} />
      <CartTotal total={calculateTotal()} />
      <OrderButton startNewOrder={startNewOrder} />
    </section>
  );
}

export default Order;
