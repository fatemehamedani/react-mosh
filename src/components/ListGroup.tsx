import { useState } from "react";

interface Props {
  items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading , onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <div className="border rounded-lg shadow-lg p-4">
        <ul className=" divide-y divide-gray-200 ">
                  <h1 className="py-4 font-bold text-4xl">{heading}</h1>
          {items.length === 0 && <p>No item found</p>}
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "p-4 list-group active:bg-blue-700"
                  : "list-group"
              }
              key={item}
              onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;