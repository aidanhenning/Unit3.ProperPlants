import "./Cart.css";

export default function Cart({
  cartList,
  incrementQuantity,
  decrementQuantity,
}) {
  if (cartList.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }
  return (
    <section>
      <h2>Cart</h2>
      {cartList.map((plant) => (
        <ul>
          <li key={plant.id} className="cart-item">
            <div>
              {plant.image}
              {plant.name}
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => decrementQuantity(plant.id)}>-</button>
              <span>{plant.quantity}</span>
              <button onClick={() => incrementQuantity(plant.id)}>+</button>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}
