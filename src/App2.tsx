import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App2 = () => {
  useEffect(() => {
    document.title = "My App";
  });

  const [category, setCategory] = useState("");

  return (
    <div className="ml-7">
      <select
        id="Form"
        className="flex flex-col w-52 my-4 px-3 rounded border border-gray-700"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>

      <ProductList category={category} />
    </div>
  );
};

export default App2;
