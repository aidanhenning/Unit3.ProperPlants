import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Plants from "./components/Plants/Plants";
import PLANTS from "./data";

export default function App() {
  const [cartList, setCartList] = useState([]);

  function addToCart(plant) {
    setCartList((prevCart) => {
      if (prevCart.find((item) => item.id === plant.id)) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(id) {
    setCartList((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCartList((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cartList={cartList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        {console.log(cartList)}
      </main>
    </>
  );
}
