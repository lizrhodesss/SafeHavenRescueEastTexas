import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
 

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  return (
    <div className="App">
    
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
