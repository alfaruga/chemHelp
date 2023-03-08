import "./App.css";
import { useEffect, useState } from "react";
import { recursiveFunc, splitter } from "./compoundSplitAlgorith";
import services from "./services/ElementService";
import Table from "./components/Table/Table";
import SearchArea from "./components/SearchArea/SearchArea";

function App() {
  const [compound, setCompound] = useState("");
  const [mass, setMass] = useState(0);
  const [tableData, setTableData] = useState([]);

  const inputHandler = (event) => {
    setCompound(event.target.value);
  };

  const massGetter = async (atoms) => {
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
  };

  return (
    <div className="App">
      <h1>Molecular weight Calcualtor</h1>
      <div>
        <h2>Compound formula: {compound}</h2>
        <SearchArea
          compound={compound}
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        />
        <Table tableData={tableData} molecularMass={mass} />
      </div>
    </div>
  );
}

export default App;
