import './App.css';
import Great from './components/Great.js';
import Great1 from './components/Great1.js';
import {useState} from 'react';


function App() {
    const [count2, setCount] = useState(0);

    function handleClick(){
        setCount(count2 + 1);
    }
    return (
    <div>
      <h1>Learning React</h1>
      <p>Welcome to your first React app.</p>
      <Great/>
      <Great/>
      <Great/>
      <Great1 count2={count2} onClick={handleClick}/>
      <Great1 count2={count2} onClick={handleClick}/>
      <Great1 count2={count2} onClick={handleClick}/>
    </div>
  );
}

export default App;
