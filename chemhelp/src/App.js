import "./App.css";
import { useEffect, useState } from "react";
import { recursiveFunc, splitter } from "./compoundSplitAlgorith";
import services from "./services/ElementService";
import Table from "./components/Table/Table";
function App() {
  const [compound, setCompound] = useState("");
  const [atomsCount, setAtomsCount] = useState({});
  const [mass, setMass] = useState(0);
  const [tableData, setTableData] = useState([]);

  const inputHandler = (event) => {
    setCompound(event.target.value);
  };

  const massGetter = async (atoms) => {
    console.log("This is from the getter", atoms);
    let mass = 0;
    let arr = [];
    for (const [atom, count] of Object.entries(atoms)) {
      const atomData = await services.getOne(atom);
      mass += atomData.am * count;

      let tableObJ = {
        count: count,
        atom: atom,
        am: atomData.am,
        subtotalMass: atomData.am * count,
      };
      arr.push(tableObJ);
    }
    setTableData(arr);
    setMass(mass);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const atoms = recursiveFunc(splitter(compound));
    massGetter(atoms);

    setAtomsCount({ ...atoms });
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

        <Table tableData={tableData} molecularMass={mass} />
      </div>
    </div>
  );
}

export default App;
