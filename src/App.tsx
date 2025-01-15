
import { HiOutlineCog } from "react-icons/hi";
import ListGroup from './components/ListGroup';

const App = () => {

  const items = ["Isfahan", "Tehran", "Shiraz", "rasht"];

  return (
    <div>
      <HiOutlineCog color="blue" size={40}/>
      <ListGroup heading='Iran' items={items} onSelectItem={() => {}}/>
    </div>
  )
}

export default App

