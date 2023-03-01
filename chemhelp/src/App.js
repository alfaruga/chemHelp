import "./App.css";
import { useState } from "react";
import { recursiveFunc, splitter } from "./compoundSplitAlgorith";
import services from "./services/ElementService";

function App() {
  const [compound, setCompound] = useState("");
  const [atomsCount, setAtomsCount] = useState({});
  const [mass, setMass] = useState({});

  const inputHandler = (event) => {
    setCompound(event.target.value);
  };
  const getElement =async () => {
    const symbol = "C";
    const response = await services.getAll();
    console.log(response);
    
    setMass(response);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const atoms = recursiveFunc(splitter(compound));
    setAtomsCount({ atoms });
  };

  return (
    <div className="App">
      <p>Hello word</p>
      <form onSubmit={submitHandler}>
        <label for></label>
        <input type={"text"} value={compound} onChange={inputHandler}></input>
        <button>Send</button>
      </form>
      <div>
        <h1>Compound data: {compound}</h1>
        <tr>
          <td></td>
        </tr>
        <table></table>
      </div>
      <div>Get all elements:</div>
      <button onClick={getElement}>push to get elements</button>
    </div>
  );
}

export default App;
