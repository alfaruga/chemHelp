import "./App.css";
import { useState } from "react";

const dummyData = [
  { symbol: "C", am: 12.011 },
  { symbol: "O", am: 15.999 },
];

const compound = "CO2";
const reducedToAtoms = ["C", "O", "O"];

function App() {
  const [compound, setCompound] = useState("");
  const [atomsCount, setAtomsCount] = useState({});

  const inputHandler = (event) => {
    setCompound(event.target.value);
  };

  const atomsCounter = (subs) => {
    return subs.reduce((acc, element) => {
      acc[element] ? (acc[element] += 1) : (acc[element] = 1);
      return acc;
    }, {});
  };

 

  return (
    <div className="App">
      <p>Hello word</p>
      <form onSubmit={undefined}>
        <label for></label>
        <input type={"text"} value={compound} onChange={inputHandler}></input>
        <button>Send</button>
      </form>
      <tr>
        <td></td>
      </tr>
      <table></table>
    </div>
  );
}

export default App;
