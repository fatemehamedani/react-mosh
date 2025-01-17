import { useState } from "react"


const App = () => {

  const [tags, setTags] = useState(['happy', 'sad']);

  const handleClick = () => {
    // add
    setTags([...tags, 'exciting']);
    // remove
    setTags(tags.filter(tag => tag !== 'happy'));
    // update
    setTags(tags.map(tag => tag === 'sad' ? tag : 'cheerful'));
   };

  return (
    <div>
      <button onClick={handleClick}>My Button</button>
    </div>
  )
}

export default App
