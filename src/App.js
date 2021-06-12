import './App.css';
import { useState } from 'react';

const Button = ({ increment, onClickFunction }) =>{
  
  const handleClick = () =>{
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

function App() {
  let [count, setCount] = useState(0)

  let incrementCount = increment =>{
    setCount(count + increment)
  }

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount}/> 
      <Button increment={10} onClickFunction={incrementCount}/> 
      <Button increment={100} onClickFunction={incrementCount}/> 
      <Button increment={1000} onClickFunction={incrementCount}/> 
      <h4>{count}</h4>
    </div>
  );
}

export default App;
