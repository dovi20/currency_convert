import Input from "./Input";
import { useState } from 'react';
import './App.css'


function App() {
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(3.5)
  function convert(e){
    if(e.target.id === 'from'){
    setFrom(e.target.value);
    setTo((e.target.value*3.5).toFixed(2))
  }else{
    setTo(e.target.value);
    setFrom((e.target.value/3.5).toFixed(2))

  }
}
  return (
    <>
    <div className="App">
      <header>
        <h1>convertor</h1>
      </header>
      <Input value={from} convert={convert} id="from" label="ILS"/>
      <h4>⬆️⬇️</h4>
      <Input value={to} convert={convert} id="to" label="USD"/>
    </div>
    <span>&copy;	 v0.1 beta</span>
    </>
  );
}

export default App;
