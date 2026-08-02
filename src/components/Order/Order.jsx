import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderButton from "./OrderButton";
import CartTotal from "../Cart/CartTotal";

function Order({ cart, startNewOrder, calculateTotal }) {
  return (
    <section className="max-w-80 h-150 flex flex-col items-center gap-4 p-6 rounded-2xl bg-Rose-50 ">
      <OrderHeader />
      <OrderItems cart={cart} />
      <CartTotal calculateTotal={calculateTotal} />
      <OrderButton startNewOrder={startNewOrder} />
    </section>
  );
}

export default Order;
