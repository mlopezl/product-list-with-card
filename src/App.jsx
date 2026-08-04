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
    if(!cartItem){
     const  newItem = {
        quantity: 1,
        dessert: item
      }
      setCart(prevCart => [...prevCart, newItem]);
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

  const deleteFromCart = (name) => {
  const cartItem = cart.find(
    item => item.dessert.name === name
  );

  if (!cartItem) return;

  if (cartItem.quantity === 1) {
    setCart(prevCart =>
      prevCart.filter(
        item => item.dessert.name !== name
      )
    );
  } else {
    setCart(prevCart =>
      prevCart.map(item =>
        item.dessert.name === name
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
    );
  }
};

  const completeOrder = () =>{
    setIsCompleted(true);
  }

  const startNewOrder = () =>{
    setIsCompleted(false);
    setCart([]);
  }

  const calculateTotal = () =>{
      return cart.reduce((total, dessert) =>{
          return total += dessert.quantity * dessert.dessert.price;
      }, 0)
    }

  return (
    <div className="w-full flex flex-col p-4 gap-6 justify-center items-center bg-Rose-100 relative lg:flex-row lg:flex-wrap lg:items-start lg:gap-0">
      {
        isCompleted ?
        <Order cart={cart} startNewOrder={startNewOrder} calculateTotal={calculateTotal}/> :
        <>
        <Cards addToCart={addToCart} deleteFromCart={deleteFromCart} cart={cart}/>
        <Cart cart={cart} isCompleted={completeOrder} calculateTotal={calculateTotal}/>
        </>
      }
      
    </div>
  );
}

export default App;
