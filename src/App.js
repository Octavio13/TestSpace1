import React from "react";
import "./App.css";
import "./imagebank/matrix.jpg";

export const App = () => {
  // debugger;
  // let proPerty = [];
  // console.log("proPerty from rerender ", proPerty);
  const [number, setNumber] = React.useState(0);
  const [proPerty, setProPerty] = React.useState([]);

  const salvarNumero = ({ value }) => {
    // console.log(value);
    setNumber(value);
  };

  const onAdd = () => {
    console.log("from on add, number is eq to: ", number);
    // proPerty.push("proPerty from event ", proPerty);
    // console.log(number);

    setProPerty([number, ...proPerty]);
  };

  console.log("from re-render number is eq to : ", number);

  return (
    <div style={{ margin: 15 }}>
      <h1>Rendering arrays and matrices</h1>
      {/* <img>src={matrix.jpg}/img> alt={'Image not displayed'} */}
      {/* <form> */}
      <label>Value</label>
      <br />
      <input
        type="number"
        value={number}
        onChange={e => salvarNumero(e.target)}
      />
      <button onClick={onAdd}>Submit!</button>
      <br />
      {/* </form> */}
      proPerty= {proPerty}
    </div>
  );
};

// export default App;
