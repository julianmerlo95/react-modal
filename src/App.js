import React, { useState } from 'react';
import ShowModal from './components/modal/Modal';

function App() {
  const [modal, setModal] = useState(false);
  
  const showModalHandler = ()=>{
    setModal(!modal);
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center", padding: "15px" }}>
        <h2>This is a simple modal in React</h2>
        <h3>
          You can close the modal, from the button, pressing outside the modal
          or with escape
        </h3>
        <button style={{ cursor: "pointer" }} onClick={showModalHandler}>
          Show Modal
        </button>
      </div>
      <ShowModal valueModal={modal} showModalHandler={showModalHandler} />
    </div>
  );
}

export default App;