import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])

  const cartItems = cart.map(item =>
    <li key={item.id}>
      x{item.count} {item.name}: ${item.price} (${(item.count * item.price).toFixed(2)})
    </li>
  )

  const cartTotal = cart.reduce((partialSum, item) => partialSum + (item.price * item.count), 0)


  const addToCart = (item) => {
    const existingItem = cart.find(i => i.name === item.name)
    if (existingItem) {
      setCart(
        cart.map(oldItem =>
          oldItem === existingItem
            ? { ...oldItem, count: existingItem.count + 1 }
            : { ...oldItem }
        )
      )
    } else {
      setCart(oldCart => [...oldCart, item])
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>My Bakery</h1>
      </div>
      {/* TODO: personalize your bakery (if you want) */}

      <div className="grid_container">
        <div className="bakery_items_container">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem data={item} id={index} onAddToCart={addToCart} /> // replace with BakeryItem component
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          <ul>{cartItems}</ul>
          <p>Price: ${cartTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
