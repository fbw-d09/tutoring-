import React,{useState} from 'react'
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div className="App">
       <p>You clicked {count} times</p>
       {console.log(count)}
        <button onClick={() => setCount(count + 1)}>
         Click me
      </button>
    </div>
  );
}

export default App;
