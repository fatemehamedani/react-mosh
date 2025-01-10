import ListGroup from "./components/ListGroup";
const App = () => {
  return (
    <>
      <div className="border rounded-lg shadow-lg p-4">
        <ul className="divide-y divide-gray-200">
          <h1 className="py-4 font-bold text-4xl">LIST</h1>
          <li className="py-4">An item</li>
          <li className="py-4">A second item</li>
          <li className="py-4">A third item</li>
          <li className="py-4">A fourth item</li>
          <li className="py-4">And a fifth one</li>
        </ul>
      </div>
    </>
  );
};

export default App;
