import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { useState } from "react";
import desserts from "../data.json";

function App() {
  const [cart, setCart] = useState([]);
  const [isCompleted, setIsCompleted] =  useState(false);

  const addToCart = (name) =>{
    const item = desserts.find(item => item.name === name);
    const cartItem = cart.find(cartItem => cartItem.dessert.name === name);
    console.log(cart);
    if(!cartItem){
     const  newItem = {
        quantity: 1,
        dessert: item
      }
      setCart(prevCart => [...prevCart, newItem]);
      console.log(cart);
    } else{
      setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.dessert.name === name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
    }
  }

  const completeOrder = () =>{
    setIsCompleted(true);
  }

  const startNewOrder = () =>{
    setIsCompleted(false);
    setCart([]);
  }

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center bg-Rose-100 relative">
      {
        isCompleted ?
        <Order cart={cart} startNewOrder={startNewOrder} /> :
        <>
        <Cards addToCart={addToCart} />
        <Cart cart={cart} isCompleted={completeOrder} />
        </>
      }
      
    </div>
  );
}

export default App;
