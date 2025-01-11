import { MouseEvent } from "react";
import ListGroup from "./components/ListGroup";
const App = () => {
  let items = ["isfahan", "tehran", "shiraz", "tabriz", "rasht"];
  const handleClick = (event : MouseEvent) => console.log(event);
  return (
    <>
      <div className="border rounded-lg shadow-lg p-4">
        <ul className="divide-y divide-gray-200">
          <h1 className="py-4 font-bold text-4xl">LIST</h1>
          {items.length === 0 && <p>No item found</p>}
          {items.map((item , index) => (
            <li className="p-4" key={item} onClick={handleClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
