import React from 'react';
import './App.css';
import './imagebank/matrix.jpg'
function App() {

  const proPerty = [1, 2, 3]

  const onAdd = e => {
    proPerty.push(e)

  };

  return (
    <div>
      <h1>Rendering arrays and matrices</h1>
      {/* <img>src={matrix.jpg}/img> alt={'Image not displayed'} */}

      <form>
        <input
          value= {}
          onChange = {}
        />

        <button
          type="button"
          value=""
          onClick={onAdd}
        >
          Submit to append!
        </button><br />
      </form>
      {proPerty}
    </div>


  );
}

export default App;