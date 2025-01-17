import { useState } from "react";
import Cart from "./components/cart";
import NavBar from "./components/NavBar";

const App = () => {
  const [cartItems, setCartItems] = useState(["produce1", "produce2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default App;
