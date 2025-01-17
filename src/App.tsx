import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quality: 1 },
      { id: 2, title: "product 1", quality: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quality: item.quality + 1 } : item
      ),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
