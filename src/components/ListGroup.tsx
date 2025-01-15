import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

interface LiProps {
  active: boolean;
}

const Li = styled.li<LiProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "pink" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <div className="border rounded-lg shadow-lg p-4">
        <Ul className=" divide-y divide-gray-200">
          <h1 className="py-4 font-bold text-4xl">{heading}</h1>
          {items.length === 0 && <p>No item found</p>}
          {items.map((item, index) => (
            <Li
              active={selectedIndex === index}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </Li>
          ))}
        </Ul>
      </div>
    </>
  );
}

export default ListGroup;
