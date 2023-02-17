import { useState } from 'react';
import './App.css';
import ComponentOne from "./Components/ClassComponent"
import FuncComponent from './Components/FunctionComponent';

function App() {
  const [funClick,setfunClick] = useState(true)
  const [comClick,setcomClick] =useState(true)
  return (
  <div className="App">
      <h1 className='head'>Styling Using Functional and Class Components</h1>
      <div className='buttoncontainer'>
         <button onClick={()=>setfunClick(!funClick)}>To see styling in Function component</button>
         <button onClick={()=>setcomClick(!comClick)}>To see styling in Class component</button>
      </div>
    <div className='ComponentContainer'>
    {funClick && <FuncComponent/>}
     {comClick && <ComponentOne/>}
    </div>
  </div>
  );
}

export default App;
