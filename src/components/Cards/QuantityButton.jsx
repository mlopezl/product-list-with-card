import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

function QuantityButton({quantity, name, addToCart, deleteFromCart}) {
  return (
    <button className="absolute w-35 h-10 rounded-3xl -bottom-5 left-18 bg-Red text-Rose-50 flex justify-between items-center p-3 pl-4 pr-4 border-1 border-Rose-500 z-1">
      <DecrementButton deleteFromCart={deleteFromCart} name={name}/>
      <span className="text-xs font-semibold">{quantity}</span>
      <IncrementButton addToCart={addToCart} name={name}/>
    </button>
  );
}

export default QuantityButton;
