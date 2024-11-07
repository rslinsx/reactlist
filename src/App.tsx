import { useState } from "react";

function App () {
  const [message, setMessage] = useState('oi');

  return (
    <div>
      <h1>{message}</h1>
      
      <button onClick={()=>{
        setMessage('clicado');
      }}>Muda mensagem</button>      
    </div>
    

  );
};


export default App;