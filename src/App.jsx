import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { useState } from "react";
import desserts from "../data.json";

function App() {
  const jsonCart = [
    {
      quantity: 2,
      dessert: {
        image: {
          thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
          mobile: "./assets/images/image-waffle-mobile.jpg",
          tablet: "./assets/images/image-waffle-tablet.jpg",
          desktop: "./assets/images/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
      },
    },
    {
      quantity: 1,
      dessert: {image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "./assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
      }
    }
  ];
  const [cart, setCart] = useState(jsonCart);

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center bg-Rose-100">
      <Cards />
      <Cart cart={cart} />
      <Order />
    </div>
  );
}

export default App;
